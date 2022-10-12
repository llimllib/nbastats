all: dist/index.js

dist/index.js: index.ts
	tsc --noEmit --skipLibCheck && \
		node esbuild.config.mjs production

watch:
	node esbuild.config.mjs

# serve index.html and also automatically rebuild index.ts when it starts. Is
# there a native javascripty solution to this? I use foreman in ruby and modd
# in golang for this task
serve: dist dist/index.js
	(node_modules/.bin/http-server -o & node esbuild.config.mjs)

ci:
	npm ci
	node_modules/.bin/eslint *.ts

.PHONY: all watch serve ci
