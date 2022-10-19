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
    let newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
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

  pop() {
    let tempNode = this.top;
    this.top = this.top.next;
    return tempNode;
  }

  isEmpty() {
    return !this.top;
  }

  findMin() {
    let tempNode = this.top;
    let tempMin = tempNode.data;

    while (tempNode) {
      if (tempNode.data < tempMin) {
        tempMin = tempNode.data;
      }
      tempNode = tempNode.next;
    }

    return tempMin;
  }

  peek() {
    return this.top;
  }

  sort() {
    let tempNode = this.top;
    let nodeArr = [];

    while (tempNode.next) {
      nodeArr.push(tempNode.data);
      tempNode = tempNode.next;
    }

    nodeArr.sort((a, b) => {
      if (a < b) {
        return 1;
      } else {
        return -1;
      }
    });

    for (const node of nodeArr) {
      this.push(node);
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

  count() {
    let count = 0;
    let firstNode = this.first;

    while (firstNode) {
      count++;
      firstNode = firstNode.next;
    }

    return count;
  }

  dequeue() {
    const firstData = this.first.data;
    const lastData = this.last.data;

    if (firstData === lastData) {
      this.last = null;
    }

    this.first.data = this.first.next;
    this.size--;

    return firstData;
  }

  enqueue(data) {
    let newNode = new Node(data);

    if (!this.first) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }

    this.last = newNode;
    this.size++;
  }

  findMax() {
    let count = 0;
    let firstNode = this.first;

    while (firstNode.next) {
      if (count < firstNode.data) {
        count = firstNode.data;
        firstNode = firstNode.next;
      }
    }

    return count;
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return !this.first;
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
