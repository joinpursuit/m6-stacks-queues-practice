const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  size() {
    let item = this.top;
    let count = 0;
    while (item) {
      count++;
      item = item.next;
    }
    return count;
  }

  pop() {
    let item = this.top;
    this.top = this.top.next;
    return item;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    if (this.top === null) {
      throw new Error("This stack is empty!");
    }
    return this.top;
  }

  // findMin() {}

  //sort(){}
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }

  count() {
    return this.size;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
