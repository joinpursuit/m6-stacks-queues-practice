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

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top === null;
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
      count += 1;
      current = current.next;
    }

    return count;
  }

  pop() {
    if (!this.top) return null;

    let temp = this.top;
    this.top = this.top.next;
    return temp;
  }

  findMin() {
    let min = Infinity;
    let current = this.top;

    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }

    return min;
  }

  sort() {
    let arr = [];
    let current = this.top;

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    arr
      .sort((a, b) => (b < a ? -1 : 1))
      .map((num) => {
        this.push(num);
      });
  }

  count() {
    return this.size();
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    return this.first === null;
  }

  enqueue(data) {
    const newItem = new Node(data);

    if (this.first === null) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }

    this.size++;
  }

  count() {
    return this.size;
  }

  dequeue() {
    let temp = this.first;

    if (!this.first) return null;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;

    return temp.data;
  }

  findMax() {
    let max = -Infinity;
    let current = this.first;

    while (current) {
      if (current.data > max) {
        max = current.data;
      }
      current = current.next;
    }

    return max;
  }

  getLast() {
    let result = this.first;
    let current = this.first;

    while (current) {
      result = current;
      current = current.next;
    }

    return result;
  }

  peek() {
    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
