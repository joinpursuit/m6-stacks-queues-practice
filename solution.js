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
  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.top === null) return null;
    const current = this.top;
    this.top = current.next;
    return current;
  }
  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    return this.top;
  }
  findMin() {
    if (this.isEmpty()) return null;
    let min = this.top.data;
    let current = this.top;
    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return min;
  }
  convertToArr() {
    let current = this.top;
    const arr = [];
    while (current) {
      arr.unshift(current.data);
      current = current.next;
    }
    return arr;
  }
  sort() {
    const arr = this.convertToArr();
    arr.sort();
    this.top = null;
    for (let i = arr.length - 1; i >= 0; i--) this.push(arr[i]);
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
  dequeue() {
    if (!this.first) return "Queue is empty";
    if (this.first === this.last) this.last = null;
    const current = this.first;
    this.first = this.first.next;
    return current.data;
  }
  count() {
    let count = 0;
    let current = this.first;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
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
  findMax() {
    let max = this.first.data;
    let current = this.first;
    while (current) {
      if (current.data > max) max = current.data;
      current = current.next;
    }
    return max;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
