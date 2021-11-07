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
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (this.top === null) {
      throw new Error("The stack is currently empty");
    }
    if (this.top) {
      let node = this.top;
      this.top = node.next;
      return node;
    }
  }
  size() {
    let count = 0;
    let node = this.top;
    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("The stack is empty!");
    }
    return this.top;
  }
  findMin() {
    let node = this.top;
    let arr = [];
    for (let i = 0; i < this.size(); i++) {
      arr.push(node.data);
      node = node.next;
    }
    return Math.min(...arr);
  }
  sort() {
    let node = this.top;
    let arr = [];
    for (let i = 0; i < this.size(); i++) {
      arr.push(node.data);
      node = node.next;
    }
    arr.sort();
    let stack = new Node();
    for (let i = arr.length - 1; i >= 0; i--) {
      this.push(arr[i]);
    }
    return stack;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    let node = new Node(data);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return this.size++
  }
  dequeue(){
    if (this.first === null) {
      throw new Error("que is empty");
    }
    if (this.first === this.last) {
      this.last = null;
    }
    let dequeued = this.first;
    this.first = dequeued.next;
    this.size--;
    return dequeued.data;
  }
  count(){
    return this.size;
  }
  isEmpty(){
    return this.first === null
  }
  peek(){
    return this.first
  }
  getLast(){
    return this.last
  }
  findMax(){
    let node = this.first;
    let arr = [];
    for (let i = 0; i < this.size; i++) {
      arr.push(node.data);
      node = node.next;
    }
    return Math.max(...arr);
  }
}

const stack = new Stack();
// const numList = new Stack(stack)
for (let i = 0; i < nums.length; i++) {
  stack.push(nums[i]);
}

// console.log(numList.size())
module.exports = {
  Node,
  Queue,
  Stack,
};
