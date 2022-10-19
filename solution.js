const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top) {
    this.top = top; // value to be added / manipulated
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let topNode = this.top;
    if (this.top) {
      this.top = this.top.next;
    }
    return topNode;
  }

  size() {
    let count = 0;
    let tempNode = this.top;

    while (tempNode) {
      count++;
      tempNode = tempNode.next;
    }

    return count;
  }
// check if the size method returns 0-> empty
  isEmpty() {
    return this.size() === 0 ? true : false;
  }

  //peek? access the top item
  peek() {
    return this.top;
  }

  // variable for smallest, and temp node. compare current to next one, smallest one becomes slallest variable.
  
  findMin() {
    if (this.isEmpty()) {
      return null;
    }// error handling

    let minNode = this.top;
    let tempNode = this.top;

    while (tempNode) {
      if (tempNode.data < minNode.data) {
        minNode = tempNode;
      }
      tempNode = tempNode.next;
    }

    return minNode.data;
  }

  sort() {}
}

class Queue {
  constructor(){

  }
}



module.exports = {
  Node,
  Queue,
  Stack,
};
