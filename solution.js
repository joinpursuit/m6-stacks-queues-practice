const { nums, words } = require("./data/data.js");
const { inspect } = require("util");



class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

// CREATE A STACK 
class Stack {
  constructor(top = null) {
    this.top = top;
  }

  // PUSH 
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  // EMPTY 
  isEmpty() {
    return this.top === null;
  }

  //  SIZE 
  size(){
    let count = 0;
    let newTop = this.top;
    while(newTop) {
      count++
      newTop = newTop.next;
    }
    return count
  }

  // POP 
  pop() {
    if (this.isEmpty()) {
      throw newError("There is nothing in this stack")
    }
    const item = this.top;
    if(item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  // PEEK 
  peek() {
    if (this.isEmpty()) {
      throw new Error("this stack is empty");
    }
    return this.top
  }

  // FIND MIN
  findMin() {
    
  }

  // SORT 
  sort() {

  }
}

// CREATE A QUEUE
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // COUNT 
  count() {

  }

  // ENQUEUE
  enqueue(data) {
    let newItem = new Node(data);
    if(!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }

  // CHECK IF ITS EMPTY
  isEmpty() {
    return this.first === null;
  }

  // DEQUEUE
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

  // PEEK 
  peek() {
    if (this.first == null) {
      throw new Error("the queue is empty");
    }
    return this.first;
  }

  // FIND MAX
  findMax() {

  }

  // GET LAST 
  getLast() {

  }


  
}

const stack = new Stack(nums);
const queue = new Queue();
// console.log(stack.size())
// console.log(stack)

module.exports = {
  Node,
  Queue,
  Stack,
};


