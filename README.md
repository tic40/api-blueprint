# Description

* Write API docs by api blueprint(https://apiblueprint.org/)
* Render blueprint to HTML by aglio(https://github.com/danielgtaylor/aglio)

# Requirement

* Node.js
* aglio https://github.com/danielgtaylor/aglio
* gulp https://github.com/gulpjs/gulp

# Getting Started(Installation)

1. install Node.js

2. install aglio and gulp as global
```
$ npm install -g aglio gulp
```

3. npm install
```
$ npm install
```

# Usage

edit API blueprint files
- blueprints/{version number}/api/*.md.
- blueprints/{version number}/index.md.

### build
rendering html file to public/ directory from API blueprint documents.
```
$ gulp build
```

### watch
build automatically when markdown files is changed.
```
$ gulp watch
```
