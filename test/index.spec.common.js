"use strict";

/* eslint-disable no-unused-expressions */

const {describe, it} = require("mocha");
const {expect} = require("chai");
const {linkedList} = require("../index.common.js");

describe("linked-list", () => {
  it("should add the values correctly", () => {
    const myLinkedList = linkedList(2).addFirst(1).addFirst(0);

    expect(Array.from(myLinkedList)).to.deep.equal([0, 1, 2]);
  });

  it("should remove the values correctly", () => {
    const myLinkedList = linkedList(2).addFirst(1).addFirst(0).removeFirst();

    expect(Array.from(myLinkedList)).to.deep.equal([1, 2]);
  });

  it("should remove the values correctly with no next value", () => {
    const myLinkedList = linkedList(2).removeFirst();

    expect(Array.from(myLinkedList)).to.deep.equal([]);
  });
});
