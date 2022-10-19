const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
const internal = require("stream");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top) {
    this.top = top;
  }

  push(data) {
    let newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  size() {
    let count = 0;
    let item = this.top;
    while (item) {
      count++;
      item = item.next;
    }
    return count;
  }

  pop() {
    if (!this.top) {
      throw new Error("Nothing there.");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  isEmpty() {
    return !this.top;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let item = this.top;
    let dataArry = [];
    while (item) {
      // console.log(item, item.data)
      dataArry.push(item.data);
      item = item.next;
    }
    return Math.min(...dataArry);
  }

  sort() {
    let item = this.top;
    let dataArry = [];
    while (item) {
      dataArry.push(item.data);
      item = item.next;
    }
    dataArry.sort();
    console.log(dataArry);
    this.top = null;
    while (dataArry.length > 0) {
      this.push(dataArry.pop());
    }
    return this.top;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
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
    if (!this.first) {
      throw new Error("Nothing there.");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  count() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }

  peek() {
    return this.first;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    let item = this.first;
    let dataArry = [];
    while (item) {
      // console.log(item, item.data)
      dataArry.push(item.data);
      item = item.next;
    }
    return Math.max(...dataArry);
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
