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
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }
  size() {
    let count = 0;
    let tempNode = this.top;
    while (tempNode) {
      tempNode = tempNode.next;
      count++;
    }
    return count;
  }
  pop() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let removed = this.top;
    if (removed) {
      let newItem = removed.next;
      this.top = newItem;
      return removed;
    }
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    return this.top;
  }
  findMin() {
    let newArr = [];
    let tempNode = this.top;
    while (tempNode) {
      newArr.push(tempNode.data);
      tempNode = tempNode.next;
    }
    return Math.min(...newArr);
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
      this.max = newItem.data;
    } else {
      this.last.next = newItem;
      this.last = newItem;
      this.max = this.max > newItem.data ? this.max : newItem.data;
    }
    this.size++;
    return this.size;
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
    return this.first;
  }
  isEmpty() {
    return !this.first;
  }
  count() {
    return this.size;
  }
  getLast() {
    if (!this.first) {
      throw new Error("no nodes here");
    }
    let tempNode = this.first;
    while (tempNode.next) {
      tempNode = tempNode.next;
    }
    return tempNode;
  }
  findMax() {
    return this.max;
  }
}
module.exports = {
  Node,
  Queue,
  Stack,
};
