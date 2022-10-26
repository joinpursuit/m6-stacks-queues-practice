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

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) return null;
    const current = this.top;
    this.top = current.next;
    return current;
  }

  size() {
    let counter = 0;
    let current = this.top;
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  isEmpty() {
    return !this.top;
  }

  findMin() {
    let tempNode = this.top;
    let tempMin = tempNode.data;

    while (tempNode) {
      if (tempNode.data < tempMin) {
        tempMin = tempNode.data;
      }
      tempNode = tempNode.next;
    }

    return tempMin;
  }

  peek() {
    return this.top;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) this.first = newNode;
    else this.last.next = newNode;
    this.last = newNode;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    return this.first;
  }

  getLast() {
    return this.last;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
