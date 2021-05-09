"use strict";

const linkedList = (value, next) => ({
  addFirst(newValue) {
    return linkedList(newValue, linkedList(value, next));
  },

  *[Symbol.iterator]() {
    yield value;

    if ("undefined" !== typeof next) {
      yield* next;
    }
  }
});

module.exports = {
  linkedList
};
