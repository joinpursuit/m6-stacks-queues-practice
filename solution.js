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
    const newItem = new Node(data); //create new node
    newItem.next = this.top; // set the new nodes NEXT value to point at "old" top
    this.top = newItem; //set this.top to new node
  }
  size() {
    let count = 0;
    let tempNode = this.top;
    while (tempNode) {
      tempNode = tempNode.next;
      count++;
    }
    return count;
  }
  pop() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let removed = this.top;
    if (removed) {
      let newItem = removed.next; //save the 'old' this.top next value
      this.top = newItem;
      return removed;
    }
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    return this.top;
  }
  findMin() {
    let newArr = [];
    let tempNode = this.top;
    while (tempNode) {
      newArr.push(tempNode.data);
      tempNode = tempNode.next;
    }
    return Math.min(...newArr);
  }
  //BUBBLE SORT METHOD
  // sort() {
  //   let length = this.size();
  //   for (let i = 0; i < length; i++) {
  //     let leftNode = this.top;
  //     let rightNode = this.top.next;
  //     for (let j = 0; j < length - 1 - i; j++) {
  //       if (leftNode.data > rightNode.data) {
  //         let data = [rightNode.data, leftNode.data];
  //         leftNode.data = data[0];
  //         rightNode.data = data[1];
  //       }
  //       if (rightNode.next) {
  //         let tempNode = rightNode.next;
  //         leftNode = rightNode;
  //         rightNode = tempNode;
  //       }
  //     }
  //   }
  //   return this.top;
  // }
  sort() {
    if (!this.top) {
      return "Nothing to sort";
    }
    let tempStack = new Stack(); // temporary stack, will be the sorted one at end.
    while (this.top) {
      //while .this stack is not empty
      let element = this.pop().data; //pop and copy of value(data) at top of .this stack
      while (tempStack.top && tempStack.top.data < element) {
        //while tempstack is NOT empty & temp.top is LESS than element
        this.push(tempStack.pop().data); // push top of temp stack onto .this stack
      }
      tempStack.push(element); // push element into temp stack if tempstack top is > than .this top
    }
    this.top = tempStack.top; //  jest test expects .this mutation // otherwise can just return tempstack
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }
  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
      this.max = newItem.data;
    } else {
      this.last.next = newItem;
      this.last = newItem;
      this.max = this.max > newItem.data ? this.max : newItem.data;
    }
    this.size++;
    return this.size;
  }
  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }
  peek() {
    return this.first;
  }
  isEmpty() {
    return !this.first;
  }
  count() {
    return this.size;
  }
  getLast() {
    if (!this.first) {
      throw new Error("no nodes here");
    }
    let tempNode = this.first;
    while (tempNode.next) {
      tempNode = tempNode.next;
    }
    return tempNode;
  }
  findMax() {
    return this.max;
  }
}
module.exports = {
  Node,
  Queue,
  Stack,
};
