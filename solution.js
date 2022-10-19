const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;

  }
}
class Stack {
  constructor (top = null){
    this.top = top;
  }
  push (data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }
  size() {
    let count = 0;
    let item = this.top;
    while (item){
      count ++;
      item = item.next;
    }
    return count;

  }
  isEmpty() {
    return this.top == null;
  }
  pop(){
    if(this.top === null) {
      throw new Error("Stack is empty!") 
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  peek(){
    if(this.top === null) {
      throw new Error("Stack is empty!") 
    }
    return this.top;
  
  }
  findMin() {
    let item = this.top;
    let arr = [];
    for (let i = 0; i < this.size(); i++){
      arr.push(item.data);
      item = item.next;

    }
    return Math.min(...arr)

  }
  sort() {
    let item = this.top;
    let arr = [];
    for (let i = 0; i < this.size(); i++){
      arr.push(item.data);
      item = item.next;

    }
    if (typeof arr[0] === "number") {
      arr.sort((a, b) => {
        return a - b; 
        
      })
    } else {
      arr.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()){
          return -1;
        } else if (a.toLowerCase() < b.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      })
    }
     let newStack = new Stack();
     arr.forEach((data) => {
      newStack.push(data);
     })
     this.top = newStack.top
     return this.top;
  }
    
}
class Queue {
 constructor(){
  this.first = null;
  this.last = null;
  this.size = 0;
 }

 enqueue(data) {
  const newItem = new Node(data);
  if(!this.first) {
      this.first = newItem;
      this.last = newItem;
  } else {
    this.last.next = newItem;
    this.last = newItem;
  }
  return this.size++;
 }
  isEmpty() {
    return this.first === null;
  }
  dequeue() {
    if(this.first === null) {
      throw new Error("Queue is empty!");

    }
    const item = this.first;
    if(this.first === this.last) {
      this.last = null;

    }
    this.first = this.first.next;
    this.size--
    return item.data;
  }
  peek(){
    if(this.first === null) {
      throw new Error("Queue is empty!") 
    }
    return this.first;
  
  }
  count() {
    return this.size;
  }
  getLast() {
    return this.last;
  }
  findMax() {
    let item = this.first;
    let arr = [];
    for (let i = 0; i < this.size; i++){
      arr.push(item.data);
      item = item.next;

    }
    return Math.max(...arr)

  }
}


module.exports = {
  Node,
  Queue,
  Stack,
};
