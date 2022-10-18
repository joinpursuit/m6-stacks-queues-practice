const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  count() {
    return this.size;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }

    if (this.size === 1) {
      let tempNode = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return tempNode;
    }

    let tempNode = this.first;
    this.first = this.first.next;
    this.size--;
    return tempNode.data;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.size++;
  }

  getLast() {
    if (this.size === 0) {
      return null;
    } else {
      return this.last;
    }
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  peek() {
    if (this.size > 0) {
      return this.first;
    } else {
      return null;
    }
  }

  findMax() {
    if (this.size === 0) {
      return null;
    }

    let maxNode = this.first;
    let tempNode = this.first;

    while (tempNode) {
      if (tempNode.data > maxNode.data) {
        maxNode = tempNode;
      }
      tempNode = tempNode.next;
    }

    return maxNode.data;
  }
}

class Stack {
  constructor(top) {
    this.top = top;
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
    let counter = 0;
    let tempNode = this.top;

    while (tempNode) {
      counter++;
      tempNode = tempNode.next;
    }

    return counter;
  }

  isEmpty() {
    return this.size() === 0 ? true : false;
  }

  peek() {
    return this.top;
  }

  findMin() {
    if (this.isEmpty()) {
      return null;
    }

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

  sort() {
    let arr = [];
    let tempNode = this.top;
    while (tempNode) {
      arr.push(tempNode.data);
      tempNode = tempNode.next;
    }

    arr.sort();
    tempNode = this.top;

    for (let i = 0; i < arr.length; i++) {
      tempNode.data = arr[i];
      tempNode = tempNode.next;
    }
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
