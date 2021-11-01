serve:
	devd -ol .

publish:
	-git branch -D gh-pages
	git checkout -b gh-pages
	git push -f -u origin gh-pages
	git checkout main

lint:
	jshint viewer.js

update: requirements
	./scrape.py

syncdata: update
	s3cmd sync --acl-public --exclude='*' --include='*.json' data/ s3://llimllib/nbastats/

requirements:
	pip install -r requirements.txt

freeze:
	DIR=`mktemp -t nbastats -d` && \
		python -mvenv "$$DIR" && \
		source "$$DIR/bin/activate" && \
		pip install -r requirements_to_freeze.txt && \
		pip freeze > requirements.txt && \
		deactivate

# TODO: I'd like to run this on my remote server but I don't want to deal with
# setting up doctl
flush:
	doctl compute cdn flush \
		$$(doctl compute cdn list --format ID | tail -n1) \
		--files nbastats/*

dist/viewer_duckdb.js: viewer.js package-lock.json
	node build.mjs

wasm: dist/viewer_duckdb.js

clean:
	rm -f dist/*

.PHONY: serve publish lint update syncdata requirements freeze flush wasm clean
