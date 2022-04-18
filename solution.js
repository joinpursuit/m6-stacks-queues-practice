const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
  }
  push(val){
    let newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode
  }
  pop(){
    if(this.top === null) return null;
    let temp = this.top;
    this.top = this.top.next;
    return temp;
  }
  size(){
    let temp = this.top;
    let counter = 0; 

    while(temp){
      counter++;
      temp = temp.next;
    }
    return counter
  }
  isEmpty(){
    return this.top === null;
    // return !this.top;
  }
  peek(){
    return this.top;
  }
  findMin(){
    if(this.isEmpty()) return null;
    let temp = this.top;
    let min = temp.data;
    while(temp){
      if(temp.data < min){
        min = temp.data
      }
      temp = temp.next
    }
    return min;
  }
  convertToArr(){
    let temp = this.top;
    let arr = [];
    while(temp){
      arr.unshift(temp.data.toLowerCase())
      temp = temp.next;
    }
    return arr;
  }
  sort(){
    let stackArr = this.convertToArr();
    stackArr.sort((a,b)=> {
      return a < b ? 1: -1;
    });
    this.top = null;

    for(let val of stackArr){
      this.push(val)
    }
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }
}



module.exports = {
  Node,
  Stack,
  Queue,
};