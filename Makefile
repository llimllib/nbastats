serve:
	devd -ol .

publish:
	-git branch -D gh-pages
	git checkout -b gh-pages
	git push -f -u origin gh-pages
	git checkout main

lint:
	jshint viewer.js

update:
	./scrape.py

syncdata: update
	s3cmd sync --acl-public --exclude='*' --include='*.json' data/ s3://llimllib/nbastats/

.PHONY: serve publish lint syncdata update
