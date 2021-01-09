serve:
	devd -ol .

push:
	-git branch -D gh-pages
	git checkout -b gh-pages
	git push -f -u origin gh-pages
	git checkout main

lint:
	jshint viewer.js

update:
	./scrape.py

.PHONY: serve push lint update
