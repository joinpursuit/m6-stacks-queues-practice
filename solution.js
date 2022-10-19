const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(top) {
    this.top = top;
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  pop() {
    let current = this.top;
    this.top = this.top.next;
    return current;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let current = this.top.data;
    while (current.next) {
      if (current > current.next.data) {
        current = current.next;
      }
    }
    return current;
  }

  sort() {
    let node = this.top;
    let storedNodes = [];
    while (node.next) {
      storedNodes.unshift(node.data);
      node = node.next;
    }
    storedNodes.sort((a, b) => {
      if (a < b) {
        return 1;
      } else {
        return -1;
      }
    });
    this.top = null;
    for (const storedNode of storedNodes) {
      this.push(storedNode);
    }
  }
}

class Queue {
  constructor(first, last, size, max) {
    this.first = first;
    this.last = last;
    this.size = size;
    this.max = max;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size++;
  }

  dequeue(data) {
    if (!this.first) {
      return null;
    }
    const item = this.first.data;
    if (this.first.data === this.last.data) {
      this.last = null;
    }
    this.first.data = this.first.next;
    this.size--;
    return item;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
