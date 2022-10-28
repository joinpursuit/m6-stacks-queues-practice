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
  pop() {
    if (!this.top) return null;
    const current = this.top;
    this.top = current.next;
    return current;
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
  isEmpty() {
    return this.top === null;
  }
  peek() {
    return this.top;
  }
  findMin() {
    let node = this.top;
    let min = node.data;

    while (node) {
      if (node.data < min) {
        min = node.data;
      }
      node = node.next;
    }

    return min;
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
    this.max = 0;
  }
  enqueue(data) {
    let newNode = new Node(data);
    if (this.first === null) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
  }
  dequeue() {
    if (this.first === null) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    return temp.data;
  }
  getLast() {
    return this.last;
  }
  peek() {
    return this.first;
  }
  isEmpty() {
    return this.first === null;
  }
  count() {
    let temp = this.first;
    let count = 0;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  findMax() {
    let temp = this.first;
    let max = 0;
    while (temp) {
      if (temp.data > max) {
        max = temp.data;
      }
      temp = temp.next;
    }
    return max;
  }
}
module.exports = {
  Node,
  Queue,
  Stack,
};
