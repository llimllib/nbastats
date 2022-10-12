DIST = dist
DUCKDB_DIST = node_modules/@duckdb/duckdb-wasm/dist/
DUCKDB_PREREQS = duckdb.wasm duckdb-next.wasm duckdb-browser.worker.js duckdb-browser-next.worker.js
DUCKDB_PREREQS_FULL = $(addprefix $(DUCKDB_DIST),$(DUCKDB_PREREQS))
BUILD_PREREQS_FULL = $(addprefix $(DIST)/duckdb/,$(DUCKDB_PREREQS))

all: wasm teamdiamond html static

static:
	cp -r logos dist/

# build our JS bundle. It depends on two things:
# - the duckdb wasm files, which are copied from the node_modules dir if they
#   are newer than the ones we already have in dist/duckdb
# - the bundle output, dist/viewer_duckdb.js
wasm: dist/viewer_duckdb.js

# make a production build. Force all files to be rebuilt with
# the production values
production:
	ENV=production DATA_URL=https://cdn.billmill.org/nbastats make -B all

teamdiamond:
	make -C teamdiamond all

html: dist/index.html
	# playoff is an observable plot experiment at the moment
	cp -r playoff/ dist/playoff/
	cp favicon.ico dist/

	rm -rf dist/teams
	mkdir -p dist/teams
	cp teamdiamond/index.html dist/teams/
	cp teamdiamond/index.js dist/teams/

# build our index file. We're only doing one substitution, so we just do it by
# sed-ing it in, think about a more comprehensive solution if we start doing
# more.
PROD_SCRIPT_URL = https://cdn.billmill.org/nbastats/dist/viewer_duckdb.js
DEV_SCRIPT_URL = /viewer_duckdb.js
dist/index.html: src/index.html
ifeq ($(ENV),production)
	$(eval SCRIPT_URL = $(PROD_SCRIPT_URL))
else
	$(eval SCRIPT_URL = $(DEV_SCRIPT_URL))
endif

	# replace $$SCRIPT_URL with the script URL
	sed 's,\$$SCRIPT_URL,$(SCRIPT_URL),' src/index.html > dist/index.html

# if our source files have changed, rebuild the otuput bundle
dist/viewer_duckdb.js: src/viewer.js package-lock.json $(BUILD_PREREQS_FULL) build.mjs
	node build.mjs

# clean up the build files
clean:
	rm -rf dist/*


##################
# utilities
#
# serve the site for development
serve:
	devd -ol /=dist /data/=data

# copy the dist folder to our CDN
distribute: production
	@# for now, we're using jsdelivr for the web workers, due to 
	@# // https://github.com/duckdb/duckdb-wasm/discussions/419#discussioncomment-1704798
	@# so we are excluding duckdb
	s3cmd sync --exclude duckdb/* --acl-public dist/ s3://llimllib/nbastats/dist/
	make flush

# publish to github pages
publish: distribute
	# delete the current gh-pages branch
	-git branch -D gh-pages

	# copy dist folder to a temp dir
	$(eval TMP = $(shell mktemp -d))
	cp -r dist/* $(TMP)

	# get a list of all files in the dist dir, and surround them in quotes
	# because some have spaces
	$(eval MANIFEST = $(shell cd dist && find . -type file -not -path '*/\.*' | sed 's,\(.*\),"\1",'))

	# create an empty gh-pages branch (requires a recent-ish git version)
	git switch --orphan gh-pages

	# copy dist folder into root
	cp -r $(TMP)/* .

	git add $(MANIFEST)
	git commit -m "update gh-pages"
	git push -f -u origin gh-pages
	git checkout main

	# remove the temp dir
	rm -rf $(TMP)

# lint the source
lint:
	eslint src/**/*.js

# flush the CDN cache so it picks up new database files or javascript files
# TODO: I'd like to run this on my remote server but I don't want to deal with
# setting up doctl
flush:
	doctl compute cdn flush \
		$$(doctl compute cdn list --format ID | tail -n1) \
		--files nbastats/*

##################
# stats database
#
# update the database
update: requirements
	./scraper/scrape.py

# sync the stats database to my CDN
syncdata: update
	s3cmd sync --acl-public \
		--exclude='*' \
		--rinclude='\.(json|parquet)$$' \
		data/ s3://llimllib/nbastats/

# download CDN data to local
dldata:
	s3cmd sync --acl-public \
		--exclude='*' \
		--rinclude='\.(json|parquet)$$' \
		s3://llimllib/nbastats/ data/

# install the requirements for the data scraping script
requirements:
	pip install -r requirements.txt

# create requirements.txt from requirements-to-freeze.txt
freeze:
	DIR=`mktemp -t nbastats -d` && \
		python -mvenv "$$DIR" && \
		source "$$DIR/bin/activate" && \
		pip install -r requirements_to_freeze.txt && \
		pip freeze > requirements.txt && \
		deactivate

.PHONY: all html static serve publish lint update syncdata requirements freeze flush wasm clean teamdiamond
