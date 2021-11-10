const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
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
    if (this.top === null) {
      return null;
    }
    const node = this.top;
    this.top = node.next;
    return node;
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    let current = this.top;
    let min = current.data;

    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }

    return min;
  }

  peek() {
    if (this.top === null) {
      return null;
    }
    return this.top;
  }

  sort() {
    let current = this.top;
    let array = [];

    while (current) {
      array.push(current.data);
      current = current.next;
    }

    array
      .sort((a, b) => (b < a ? -1 : 1))
      .map((num) => {
        this.push(num);
      });
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
    const node = new Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
    this.size++;
  }

  dequeue() {
    const node = this.first;

    if (node === null) {
      return null;
    }

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;

    return node.data;
  }

  findMax() {
    let current = this.first;
    let max = current.data;

    while (current) {
      if (current.data > max) {
        max = current.data;
      }
      current = current.next;
    }

    return max;
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first === null) {
      return null;
    }
    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
