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
    this.size = 0;
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
    ++this.size;
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
  isSize() {
    return this.size;
  }
  findMin() {
    let item = this.top;
    let arr = [];
    while (item) {
      arr.push(item.data);
      item = item.next;
    }
    arr.sort((a, b) => {
      return a - b;
    });
    return arr[0];
  }
  sort() {
    let item = this.top;
    let arr = [];
    while (item) {
      arr.push(item.data);
      item = item.next;
    }

    arr.sort();
    arr = arr.reverse();
    this.top = null;
    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i]);
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
  isEmpty() {
    return this.first === null;
  }
  count() {
    return this.size;
  }
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
  getLast() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.last;
  }
  findMax() {
    let item = this.first;
    let arr = [];
    while (item) {
      arr.push(item.data);
      item = item.next;
    }
    arr.sort((a, b) => {
      return b - a;
    });
    return arr[0];
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
