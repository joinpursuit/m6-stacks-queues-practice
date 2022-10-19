const { nums, words } = require('./data/data.js');
const { inspect } = require('util');

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  insert(value) {
    let nodeToAdd = new Node(value);
    if (!this.head) {
      this.head = nodeToAdd;
      return this.head;
    } else {
      nodeToAdd.next = this.head;
      this.head = nodeToAdd;
    }
  }
  removeFirst() {
    let selectHead = this.head;
    this.head = this.head.next;
    return selectHead;
  }
}

class Stack {
  constructor(top) {
    this.top = top;
    this.words = [];
    this.nums = [];
  }
  isEmpty() {
    /* if (this.top === null) {
      return true;
    } else if (this.top !== null) {
      return false;
    } */
    return this.wordsStack.length === 0;
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;

    //return this.listItems.insert(value);
  }
  pop() {
    let item = this.top;
    if (item) {
      let newTop = item.next;
      this.top = newTop;
      return item;
    }
  }
  peek() {
    if (this.top === null) {
      console.log('Stack is empty.');
    } else {
      return this.top;
    }
  }
  size() {
    return words.length;
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
    let newEntry = new Node(data);
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
