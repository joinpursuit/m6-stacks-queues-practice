const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;

  }
}

// Creating a Stack
class Stack {
  constructor(top = null) {
    this.top = top;
  }

  // Can create a new node [ok]
  // Can add to stack using push method [ok]
  push(data) {
    // Creating a new node and puting it at the top of the stack
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  // Can remove from stack using pop method
  pop() {
    // Validating if the stack is empty
    if (this.top == null) {
      throw new Error("The stack is empty");
    }

    // 
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  // Check if stack is empty [ok]
  isEmpty() {
    return this.top === null;
  }

  //
  size() {
    console.log(this.top)
    return this.top.length;
  }

  //
  findMin() {
    return Math.min(this.top);
  }

  // Peek at top of stack [ok]
  peek() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }

  //
  sort() {

  }
}

// Creating a queue
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
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
}

module.exports = {
  Node,
  Queue,
  Stack,
};
