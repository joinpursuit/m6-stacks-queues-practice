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
    return this.top !== null ? Math.min(...arr) : 'Error! The stack is empty!';
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top !== null ? this.top : 'Error! The stack is empty!';
  }

  pop() {
    if (this.top === null) {
      throw new Error('Error! The stack is empty!');
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

  count() {
    return this.size;
  }

  dequeue() {
    if (this.first === null) {
      throw new Error('Error! The queue is empty!');
    }
    let item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return this.size++;
  }

  findMax() {
    let arr = this.toArray();
    return this.first !== null
      ? Math.max(...arr)
      : 'Error! The queue is empty!';
  }

  isEmpty() {
    return this.first === null;
  }

  getLast() {
    return this.last;
  }

  peek() {
    if (this.first === null) {
      throw new Error('Error! The queue is empty!');
    }
    return this.first;
  }

  toArray() {
    let array = [];
    let currentItem = this.first;
    while (currentItem) {
      array.push(currentItem.data);
      currentItem = currentItem.next;
    }
    return array;
  }
}

//Do not change any code below this line
module.exports = {
  Node,
  Queue,
  Stack,
};
