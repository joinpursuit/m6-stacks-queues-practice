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
    let currentNode = this.top;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  pop() {
    if (!this.top)
      return null;

    const popNode = this.top;
    this.top = this.top.next;
    return popNode;
  }

  isEmpty() {
    return !this.top;
  }

  findMin() {
    if (!this.top)
      return null;

    let min = this.top.data;
    let currentNode = this.top;

    while (currentNode) {
      if (currentNode.data < min) {
        min = currentNode.data;
      }
      currentNode = currentNode.next;
    }

    return min;
  }

  peek() {
    return this.top;
  }

  sort() {
    if (!this.top || !this.top.next)
      return;

    let sortAgain = true;
    while (sortAgain) {
      sortAgain = false;
      let currentNode = this.top;
      while (currentNode) {
        if (!currentNode.next)
          break;

        if (currentNode.data > currentNode.next.data) {
          const temp = currentNode.data;
          currentNode.data = currentNode.next.data;
          currentNode.next.data = temp;
          sortAgain = true;
        }
        currentNode = currentNode.next;
      }
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  count() {
    return this.size;
  }

  enqueue(data) {
    const newItem = new Node(data);

    if (!this.size) {
      this.first = newItem;
    } else {
      this.last.next = newItem;
    }
    this.last = newItem;
    this.size++;
  }

  dequeue() {
    if (!this.size)
      return null;

    const currentNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return currentNode.data;
  }

  isEmpty() {
    return !this.size;
  }

  peek() {
    return this.first;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    if (!this.size)
      return null;

    let max = this.first.data;
    let currentNode = this.first;
    while (currentNode) {
      if (currentNode.data > max) {
        max = currentNode.data;
      }
      currentNode = currentNode.next;
    }

    return max;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
