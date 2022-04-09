const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  pop() {
    let item = this.top;
    if (item) {
      let newTop = item.next;
      this.top = newTop;
      return item;
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
    return this.top === null;
  }
  peek() {
    if (this.top === null) {
      throw new Error("This stack is empty");
    }
    return this.top;
  }

  findMin() {
    let min = this.top.data;
    let currentNode = this.top.next;
    while (currentNode !== null) {
      if (min > currentNode.data) {
        min = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return min;
  }

  sort() {}
}

class Queue {
  constructor() {
    //initially our line is empty
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    //if our first is  equal to null then our queue is empty
    return this.first === null;
  }

  //we are adding data
  enqueue(data) {
    //creating an instance of node
    let newItem = new Node(data);
    //if there is no one on line make them the first person
    //otherwise make them last
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
      this.size++;
    } else {
      this.last = newItem;
    }
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
