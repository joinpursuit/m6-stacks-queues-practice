const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class Stack {
  constructor(top = null) {
    this.top = top;
  }
  toArray() {
    let arr = [];
    let item = this.top;
    while (item) {
      arr.push(item.data);
      item = item.next;
    }
    return arr;
  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
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
    if (this.isEmpty()) {
      throw newError("Sorry there was an error");
    }

    const item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  isEmpty() {
    return this.top === null;
  }
  findMin() {
    let arr = this.toArray()
    return Math.min(...arr)
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("stack is empty!");
    }
    return this.top;
  }
  

  sort() {
    let arr = this.toArray()
    let sorted = arr.sort()
    this.top = null
    while(sorted.length > 0){
      let item = sorted.pop()
      this.push(item)
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }
  toArray() {
    let arr = [];
    let item = this.first;
    while (item) {
      arr.push(item.data);
      item = item.next;
    }
    return arr;
  }
  count() {
    let count = 0;
    let node = this.first;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  dequeue() {
    if (this.first === null) {
      throw new Error("This queue is empty!");
    }

    let item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
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
  findMax() {
    let arr = this.toArray()
    return Math.max(...arr)
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return this.first === null;
  }
  peek() {
    if (this.first === null) {
      throw new Error("This queue is empty!");
    }
    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
