const { inspect } = require('util');
const { nums, words } = require('./data/data.js');

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

  findMin() {
    let arr = this.toArray();
    return this.top !== null ? Math.min(...arr) : 'The stack is empty';
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top !== null ? this.top : 'Error! The stack is empty';
  }

  pop() {
    if (this.top === null) {
      throw new Error('The stack is empty');
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  size() {
    let length = 0;
    let currentItem = this.top;
    while (currentItem) {
      length++;
      currentItem = currentItem.next;
    }
    return length;
  }

  //Sort the stack but not using sort() array method
  //New stack will be in ascending order
  sort() {
    let array = this.toArray();
    let sortedArray = array.sort();
    while (sortedArray.length) {
      let currentItem = sortedArray.pop();
      this.push(currentItem);
    }
  }

  toArray() {
    let array = [];
    let currentItem = this.top;
    while (currentItem) {
      array.push(currentItem.data);
      currentItem = currentItem.next;
    }
    return array;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.max = null;
    this.last = null;
    this.first = null;
  }
}

//Do not change any code below this line
module.exports = {
  Node,
  Queue,
  Stack,
};
