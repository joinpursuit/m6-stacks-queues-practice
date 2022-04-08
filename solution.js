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

  // Can add to stack using push method
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  // Count size of stack
  size() {
    let item = this.top;
    let count = 0;
    while (item) {
      count++;
      item = item.next;
    }
    return count;
  }

  // Can remove from stack using pop method
  pop() {
    let item = this.top; // current node
    if (item) {
      let newTop = item.next; // previous stack
      this.top = newTop; // next pop
      return item; // returning the new=next pop
    }
  }

  // Check if stack is empty
  isEmpty() {
    return this.top === null;
  }

  // Peek at top of stack
  peek() {
    if (this.top === null) {
      throw new Error("This stack is empty!");
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

  count() {
    return;
  }

  dequeue() {
    let item = this.first;
    if (this.first === this.last) {
      this.last = this.last.next;
    }
    this.first;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last - newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    ++this.size;
    // if the data is > the count then the count is now the data
    if (data > this.max) {
      this.max = data;
    }
  }
}

const queue = new Queue();

module.exports = {
  Node,
  Queue,
  Stack,
};
