"use strict";

const linkedList = (value, next) => ({
  addFirst(newValue) {
    return linkedList(newValue, linkedList(value, next));
  },

  removeFirst() {
    if ("undefined" === typeof next) {
      return linkedList(next);
    }

    return next;
  },

  toJSON() {
    return Array.from(linkedList(value, next));
  },

  *[Symbol.iterator]() {
    if ("undefined" === typeof value) {
      return;
    }

    yield value;

    if ("undefined" !== typeof next) {
      yield* next;
    }
  }
});

module.exports = {
  linkedList
};
