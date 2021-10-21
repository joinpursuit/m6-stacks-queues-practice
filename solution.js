const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
const { timeStamp } = require("console");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top.data;
  }

  size() {
    return this.size;
  }

  pop() {
    if (this.top === null) return null;
    const temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;
    return temp;
  }

  isEmpty() {
    return this.size === 0;
  }

  findMin() {}

  peek() {
    return this.top ? this.top : null;
  }

  sort() {}
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max;
  }

  count() {
    return this.size;
  }

  dequeue() {
    if (this.first === null) return null;
    const temp = this.first;
    this.first = temp.next;

    if (this.first === null) {
      this.last = null;
    }

    temp.next = null;
    this.size--;
    return temp.data;
  }

  enqueue(data) {
    const node = new Node(data);
    if (this.last !== null) {
      this.last.next = node;
    }
    this.last = node;
    if (this.first === null) {
      this.first = node;
    }

    this.size++;
    return this.size;
  }

  findMax() {}

  getLast() {
    return this.last ? this.last : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.first ? this.first : null;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
