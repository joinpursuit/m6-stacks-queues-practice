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
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.top === null) return null;
    let temp = this.top;
    this.top = temp.next;
    return temp.data;
  }
  size() {
    let count = 0;
    let temp = this.top;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  isEmpty() {
    return this.top === null;
  }
  // findMin(){}
  peek() {
    return this.top;
  }
  // sort(){}
}

class Queue {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }
  dequeue(){
    if(!this.first){
      return null
    }
    if(this.first === this.last){
      this.last = null;
    }
    let temp = this.first;
    this.first = this.first.next;
    return temp.data
  }
  peek(){
    return this.first
  }
  getLast(){
    return this.last
  }
  isEmpty(){
    
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
