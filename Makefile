DIST = dist
DUCKDB_DIST = node_modules/@duckdb/duckdb-wasm/dist/
DUCKDB_PREREQS = duckdb-mvp.wasm duckdb-eh.wasm duckdb-browser-mvp.worker.js duckdb-browser-eh.worker.js
BUILD_PREREQS_FULL = $(addprefix $(DIST)/duckdb/,$(DUCKDB_PREREQS))

.PHONY: all
all: teamdiamond html static

.PHONY: viewer
viewer: dist/index.html dist/index.js

.PHONY: static
static:
	cp -r logos dist/

.PHONY: teamdiamond
teamdiamond:
	make -C teamdiamond all

$(BUILD_PREREQS_FULL):
	mkdir -p dist/duckdb
	cp $(DUCKDB_DIST)/{duckdb-mvp.wasm,duckdb-eh.wasm,duckdb-browser-mvp.worker.js,duckdb-browser-eh.worker.js} dist/duckdb/

dist/index.html: src/index.html
	mkdir -p dist
	cp src/index.html dist/

# if our source files have changed, rebuild the otuput bundle
dist/index.js: src/index.ts src/labels.ts src/teams.ts src/stats_meta.ts package-lock.json $(BUILD_PREREQS_FULL) esbuild.config.mjs
	npx tsc --noEmit --skipLibCheck && \
		node esbuild.config.mjs

# clean up the build files
.PHONY: clean
clean:
	rm -rf dist/*


##################
# utilities
#
# serve the site for development
.PHONY: serve
serve:
	devd -ol /=dist /data/=data

# build everything that goes in dist
.PHONY: dist
dist: dist/index.html dist/index.js teamdiamond
	cp favicon.ico dist/

	rm -rf dist/teams
	mkdir -p dist/teams
	cp teamdiamond/index.html dist/teams/
	cp teamdiamond/index.js dist/teams/


# publish to github pages
# TODO: make this into a github action
.PHONY: publish
publish: dist
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
.PHONY: lint
lint:
	npx eslint src/**/*.{ts,js}
