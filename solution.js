const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next) {
    this.data = typeof data === "number" ? data >= 0 ? data : null : data || null;
    this.next = next || null;
  }
}

class Stack {
  constructor(top) {
    this.top = top || null; 
  }

  push(value) {
    let node = this.top;
    let newNode = new Node(value);
    newNode.next = node;
    this.top = newNode;

    this.size++ 
   
    return this.size
  }
}

class Queue {
  constructor(first, last) {
    this.first = first || null;
    this.last = last || null; 
    this.size = 0;
    this.max = 0;
  }
}

// if (this.max < node.data) {
//   this.max = node.data 
// }

module.exports = {
  Node,
  Queue,
  Stack,
};
