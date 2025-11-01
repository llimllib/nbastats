DIST = dist
DUCKDB_DIST = node_modules/@duckdb/duckdb-wasm/dist
DUCKDB_PREREQS = duckdb-mvp.wasm duckdb-eh.wasm duckdb-browser-mvp.worker.js duckdb-browser-eh.worker.js
BUILD_PREREQS_FULL = $(addprefix $(DIST)/duckdb/,$(DUCKDB_PREREQS))

.PHONY: all
all: dist static

.PHONY: static
static:
	cp -r logos dist/

$(BUILD_PREREQS_FULL):
	mkdir -p dist/duckdb
	cp $(DUCKDB_DIST)/duckdb-mvp.wasm dist/duckdb/
	cp $(DUCKDB_DIST)/duckdb-eh.wasm dist/duckdb/
	cp $(DUCKDB_DIST)/duckdb-browser-mvp.worker.js dist/duckdb/
	cp $(DUCKDB_DIST)/duckdb-browser-eh.worker.js dist/duckdb/

dist/index.html: src/index.html
	mkdir -p dist
	cp src/index.html dist/

# if our source files have changed, rebuild the otuput bundle
dist/index.js: teamdiamond/index.ts src/index.ts src/labels.ts src/teams.ts src/stats_meta.ts package-lock.json $(BUILD_PREREQS_FULL) esbuild.config.mjs
	npx tsc --noEmit --skipLibCheck && \
		node esbuild.config.mjs production

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

.PHONY: deps
deps: package.json package-lock.json
	npm ci

# build everything that goes in dist
.PHONY: dist
dist: clean dist/index.html dist/index.js
	cp favicon.ico dist/

	mkdir -p dist/teams
	cp -r logos dist/logos
	cp teamdiamond/index.html dist/teams/


# lint the source
.PHONY: lint
lint:
	npx eslint src/**/*.ts
