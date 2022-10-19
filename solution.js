const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top) {
    this.top = top;
  }

  push(data) {
    let newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  pop() {
    if(!this.top) {
      throw new Error("Nothing here")
    }
    let item = this.top;
    if(item) {
      let newItem = item.next;
      this.top = newItem;
      return item
    }
  }

  size() {
    let item = this.top;
    let count = 0;
    while (item) {
      count++;
      item = item.next;
    }
    return count
  }
  
  isEmpty() {
    return !this.top;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let item = this.top;
    let dataArry = [];
    while (item) {
      dataArry.push(item.data)
      item = item.next;
    }
    return Math.min(...dataArry)
  }

  sort() {
    let item = this.top;
    let dataArry = [];
    while (item) {
      dataArry.push(item.data)
      item = item.next;
    }
    dataArry.sort();
    this.top = null;
    while(dataArry.length > 0){
      this.push(dataArry.pop())
    }
    return this.top;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
      // this.max = newItem.data ?
    } else {
      this.last.next = newItem;
      this.last = newItem;
      // if(this.max < newItem.data){
      //   this.max = newItem.data
      // }
    }
    return ++this.size;
  }

  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
      this.max = 0;
    } 
    this.first = this.first.next;
    this.size--;
    return item.data;
  } 

  count () {
    return this.size;
  }

  isEmpty() {
    return this.first === null; // !this.size
  }

  peek() {
    return this.first;
  }

  getLast() {
    return this.last;
  }

  findMax(){
    let item = this.first;
    let dataArry = [];
    while (item) {
      dataArry.push(item.data)
      item = item.next;
    }
    return Math.max(...dataArry) // this.max ?
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
