const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(top) {
    this.top = top;
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  pop() {
    let current = this.top;
    this.top = this.top.next;
    return current;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.top;
  }

  fidnMin() {}
}

class Queue {
  constructor(first, last, size, max) {
    this.first = first;
    this.last = last;
    this.size = size;
    this.max = max;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
