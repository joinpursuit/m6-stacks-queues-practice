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
    let newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.top === null) {
      throw new Error("Nothing in stack!!");
    }
    if (this.top) {
      let node = this.top;
      this.top = node.next;
      return node;
    }
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
  isEmpty() {
    return !this.top;
  }
  peek() {
    return this.top;
  }
  findMin() {
    let min = Infinity;
    let node = this.top;
    for (let i = 0; i < this.size(); i++) {
      if (node.data < min) {
        min = node.data;
        node = node.next;
      }
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
    const sortedArr = arr.sort((a, b) => (b < a ? -1 : 1));
    this.top = new Node(sortedArr[0]);
    for (let i = 1; i < sortedArr.length; i++) {
      this.push(sortedArr[i]);
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
    let node = new Node(data);
    if(this.first === null){
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size
  }
  dequeue() {
    if(!this.first) {
     throw new Error("Empty queue!")
    }
    if(this.first === this.last) {
      this.last = null;
    }
    let dequeqed = this.first;
    this.first = this.first.next;
    this.size--
    return dequeqed.data
  }
  isEmpty() {
    return !this.first && !this.last
  }
  peek() {
    if(this.first === null) {
      throw new Error("This is an empty queue")
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
    let max = -Infinity;
    let node = this.first;
    for (let i = 0; i < this.size; i++) {
      if(node.data > max) {
        max = node.data;
        node = node.next;
      }
    }
    return max;
  }
}
module.exports = {
  Node,
  Queue,
  Stack,
};
