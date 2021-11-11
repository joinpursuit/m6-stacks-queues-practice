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
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  size() {
    let count = 0;
    let node = this.top;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  pop() {
    if (this.top === null) {
      throw new Error("The stack is currently empty");
    }
    if (this.top) {
      let node = this.top;
      this.top = node.next;
      return node;
    }
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let arr = [];
    let node = this.top;
    for (let i = 1; i < this.size(); i++) {
      arr.push(node.data);
      node = node.next;
    }
    return Math.min(...arr);
  }

  sort() {
    let node = this.top;
    let arr = [];
    for (let i = 0; i < this.size(); i++) {
      arr.push(node.data);
      node = node.next;
    }
    arr.sort();
    this.top = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      this.push(arr[i]);
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  count() {
    return this.size;
  }

  dequeue() {
    if (this.first === this.last) {
      this.last = null;
    }
    let dequeued = this.first;
    this.first = this.first.next;
    this.size--;
    return dequeued.data;
  }

  enqueue(data) {
    let node = new Node(data);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  peek() {
    return this.first;
  }

  isEmpty() {
    return this.first === null;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    let arr = [];
    let node = this.first;
    for (let i = 0; i < this.size; i++) {
      arr.push(node.data);
      node = node.next;
    }
    return Math.max(...arr);
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
