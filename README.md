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

console.log(JSON.stringify(myLinkedList));
// "[1,2]"
```
