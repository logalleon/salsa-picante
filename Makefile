.PHONY: build tsc clean

app := ./index.js
src := ./src
srcFiles := $(shell find src/ts -type f -name '*.ts*')
jsFiles := $(shell find dist/ -type f -name '*.js*')
sassFiles := $(shell find src/sass -type f -name '*.scss')

build: index.js main.css

main.css: $(sassFiles)
	sass src/sass/main.scss main.css

index.js: $(wildcard $(jsFiles))
	browserify dist/index.js -o index.js

$(jsFiles): $(wildcard $(srcFiles))
	tsc