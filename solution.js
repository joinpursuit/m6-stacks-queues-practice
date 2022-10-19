const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  isEmpty() {
    return !this.top;
    // this.top === null
  }

  push(data) {
    const newItem = new Node(data);
    // intialize node with data
    newItem.next = this.top;
    // set new node next to current top
    this.top = newItem;
  }

  pop() {
    if (!this.top) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
    } return item;
  }

  peek() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }

  size() {
    let dataArray = [];
    let node = this.top;
    while (node) {
      dataArray.push(node.data);
      node = node.next;
    }
    return dataArray.length;
  }

  findMin() {
    let dataArray = [];
    let node = this.top;
    while (node) {
      dataArray.push(node.data);
      node = node.next;
    }
    return dataArray[0];
  }

  sort() {
    let dataArray = [];
    let node = this.top;
    while (node) {
      dataArray.push(node.data);
      node = node.next;
    }
    let sortedArray = dataArray.sort();
    this.top = null;
    while(sortedArray.length > 0) {
      let node = sortedArray.pop();
      this.push(node);
  } return dataArray
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
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

  getLast() {
    return this.last;
  }

  findMax() {
    let dataArray = [];
    let node = this.first;
    while(node) {
      dataArray.push(node.data);
      node = node.next;
    }
    return Math.max(...dataArray)
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
