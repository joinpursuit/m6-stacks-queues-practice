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

  // CONVERT TO ARRAY
  toArray() {
    let arr = [];
    let item = this.top;
    while (item) {
      arr.push(item.data);
      item = item.next;
    }
    return arr;
  }

  // FIND MIN
  findMin() {
    let arr = this.toArray();
    return Math.min(...arr);
  }

  // SORT 
  sort() {
    let arr = this.toArray();
    // let sortedArr = arr.sort();
    // this.top = null;
    // for(let i = sortedArr.length-1; i >= 0; i--) {
    //   this.push(sortedArr[i])
    // }
    let sorted = arr.sort()
    this.top = null
    while(sorted.length > 0){
      let item = sorted.pop()
      this.push(item)
    }

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
    return this.size
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
    let array = [];
    let item = this.first;
    while(item) {
      array.push(item.data);
      item = item.next;
    }
    return Math.max(...array)
  }

  // GET LAST 
  getLast() {
    return this.last;
  }


  
}

// const stack = new Stack();
// const queue = new Queue();
// console.log(stack.size())
// console.log(stack)

module.exports = {
  Node,
  Queue,
  Stack,
};


