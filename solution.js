const { nums, words } = require('./data/data.js');
const { inspect } = require('util');

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  isEmpty() {
    return this.top === null;
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    return ++this.size;
  }
  pop() {
    let item = this.top;
    if (item) {
      let newTop = item.next;
      this.top = newTop;
      return item;
    }
    this.size--;
  }
  size() {
    return this.size;
  }
  peek() {
    if (this.top === null) {
      console.log('Stack is empty.');
    } else {
      return this.top;
    }
  }
}

class Queue {
  constructor(max) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = max;
  }
  enqueue(data) {
    let newEntry = new Node(data);
    if (!this.first) {
      this.first = newEntry;
      this.last = newEntry;
    } else {
      this.last.next = newEntry;
      this.last = newEntry;
    }
    return ++this.size;
  }
  dequeue() {
    if (this.first === null) {
      console.log('The queue is empty.');
    }
    const entry = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return entry.data;
  }
  isEmpty() {
    return this.first === null;
  }
  peek() {
    if (this.first === null) {
      console.log('Empty queue');
    }
    return this.first;
  }
  getLast() {
    const lastNode = this.last;
    return lastNode;
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
