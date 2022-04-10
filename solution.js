// const { nums, words } = require("./data/data.js");
// const { inspect } = require("util");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }
  pop() {
    if (this.top == null) {
      throw new Error("the stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
