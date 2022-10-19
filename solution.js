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
  isEmpty() {
    return this.top === null;
  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }
  peek() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }
  pop() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  size() {
    let counter = 0;
    let node = this.top;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  findMin() {
    if (this.isEmpty()) {
      return null;
    }
    let min = this.top;
    let node = this.top;
    while (node) {
      if (node.data < min.data) {
        min = node;
      }
      node = node.next;
    }
    return min.data;
  }
  sort() {
    let arr = [];
    let node = this.top;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    arr.sort();
    node = this.top;
    for (let i = 0; i < arr.length; i++) {
      node.data = arr[i];
      node = node.next;
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }
  isEmpty() {
    return this.first === null;
  }
  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
  count() {
    return this.size;
  }
  findMax() {
    let arr = [];
    let item = this.first;
    while (item) {
      arr.push(item.data);
      item = item.next;
    }
    return Math.max(...arr);
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
