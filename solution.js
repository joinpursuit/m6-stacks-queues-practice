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
      return item;
    }
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
    // 1. Make temporary stack tempStack.
    // 2. While the input stack is not empty, we will perform this:
    // Pop an element from the input stack and call it temp.
    // While tempStack is not empty and the top of tempStack is smaller than temp, pop elements from tempStack and push them into the input stack.
    // Push temp into the tempStack.
    // 3. The sorted numbers are in tempStack return tempStack.
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

  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
