.PHONY: all
all: dist/index.js

dist/index.js: index.ts
	npx tsc --noEmit --skipLibCheck && \
		node esbuild.config.mjs production

.PHONY: watch
watch:
	node esbuild.config.mjs

# serve index.html and also automatically rebuild index.ts when it starts. Is
# there a native javascripty solution to this? I use foreman in ruby and modd
# in golang for this task
.PHONY: serve
serve: dist dist/index.js
	(npx http-server -o & node esbuild.config.mjs)

.PHONY: ci
ci: package.json package-lock.json
	npm ci
	npx eslint *.ts
