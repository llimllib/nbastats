DIST = dist
DUCKDB_DIST = node_modules/@duckdb/duckdb-wasm/dist/
DUCKDB_PREREQS = duckdb.wasm duckdb-next.wasm duckdb-browser.worker.js duckdb-browser-next.worker.js
DUCKDB_PREREQS_FULL = $(addprefix $(DUCKDB_DIST),$(DUCKDB_PREREQS))
BUILD_PREREQS_FULL = $(addprefix $(DIST)/duckdb/,$(DUCKDB_PREREQS))

# build our JS bundle. It depends on two things:
# - the duckdb wasm files, which are copied from the node_modules dir if they
#   are newer than the ones we already have in dist/duckdb
# - the bundle output, dist/viewer_duckdb.js
wasm: duckdb_files dist/viewer_duckdb.js

# if our source files have changed, rebuild the otuput bundle
dist/viewer_duckdb.js: viewer.js package-lock.json $(BUILD_PREREQS_FULL)
	node build.mjs

# If the files contained in the duckdb node_modules dir have changed, copy them
# to dist/duckdb
duckdb_files:
	# only update files if they're newer
	rsync --update $(DUCKDB_PREREQS_FULL) $(DIST)/duckdb/

# clean up the build files
clean:
	rm -f dist/*


##################
# utilities
#
# serve the site for development
serve:
	devd -ol .

# copy the dist folder to our CDN
distribute: dist/viewer_duckdb.js
	s3cmd sync --acl-public dist/ s3://llimllib/nbastats/dist/

# publish to github pages
publish: distribute
	-git branch -D gh-pages
	git checkout -b gh-pages
	git push -f -u origin gh-pages
	git checkout main

# lint the source
lint:
	eslint viewer.js

##################
# stats database
#
# update the database
update: requirements
	./scrape.py

# sync the stats database to my CDN
syncdata: update
	s3cmd sync --acl-public --exclude='*' --rinclude='\.(json|parquet)$$' data/ s3://llimllib/nbastats/

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

# flush the CDN cache so it picks up new database files
# TODO: I'd like to run this on my remote server but I don't want to deal with
# setting up doctl
flush:
	doctl compute cdn flush \
		$$(doctl compute cdn list --format ID | tail -n1) \
		--files nbastats/*

.PHONY: serve publish lint update syncdata requirements freeze flush duckdb_files wasm clean
