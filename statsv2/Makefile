all: dist/index.js dist/index.html

dist/index.html: src/index.html
	cp src/index.html dist/

dist/duckdb-mvp.wasm: node_modules/@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm
	cp node_modules/@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm dist/

dist/duckdb-eh.wasm: node_modules/@duckdb/duckdb-wasm/dist/duckdb-eh.wasm
	cp node_modules/@duckdb/duckdb-wasm/dist/duckdb-eh.wasm dist/

dist/duckdb-browser-mvp.worker.js: node_modules/@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js
	cp node_modules/@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js dist/

dist/duckdb-browser-eh.worker.js: node_modules/@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js
	cp node_modules/@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js dist/

dist/index.js: src/index.ts dist/duckdb-browser-mvp.worker.js dist/duckdb-browser-eh.worker.js dist/duckdb-eh.wasm dist/duckdb-mvp.wasm
	node_modules/.bin/tsc --noEmit --skipLibCheck && \
		DATA_URL=https://cdn.billmill.org/nbastats node esbuild.config.mjs production

dev:
	node_modules/.bin/tsc --noEmit --skipLibCheck && \
		DATA_URL=https://devd.io:8000/data2 node esbuild.config.mjs

# serve index.html and also automatically rebuild index.ts when it starts. Is
# there a native javascripty solution to this? I use foreman in ruby and modd
# in golang for this task
serve: dist dist/index.js
	(node_modules/.bin/http-server -o & node esbuild.config.mjs)

ci:
	npm ci
	node_modules/.bin/eslint *.ts

.PHONY: all dev serve ci
