# @aminnairi/linked-list

[![Test](https://github.com/aminnairi/javascript-linked-list/actions/workflows/test.yaml/badge.svg)](https://github.com/aminnairi/javascript-linked-list/actions/workflows/test.yaml)

## Requirements

- Node

## Installation

```console
$ npm install @aminnairi/linked-list
```

## Usage

```javascript
"use strict";

const {linkedList} = require("@aminnairi/linked-list");

const myLinkedList = linkedList(2).addFirst(1).addFirst(0).removeFirst();

console.log(Array.from(myLinkedList));
// [1, 2]
```

## Todo

- [x] Create a package setting
- [x] Add a license
- [x] Add documentation
- [x] Add a changelog
- [x] Publish the repository on GitHub
- [x] Add a git tag
- [x] Add unit tests
- [x] Add a pull request template
- [x] Add a bug report template
- [x] Add a feature request template
- [x] Add a contribution guideline
- [x] Publish the library on NPM
- [x] Optimize the library size
- [x] Add a test workflow
- [ ] Add a publish workflow
