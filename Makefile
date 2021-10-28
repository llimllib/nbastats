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

.PHONY: serve publish lint syncdata update requirements freeze
