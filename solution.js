const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data){
    this.data = data;
    this.text = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  isEmpty(){
    return this.top === null;
  }
  push(data){
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
    
  }
  size(){
    let count = 0;
    let node = this.top;
    while(node){
      node = node.next;
      count ++;
    }
    return count;
  }
  pop(){
    const item = this.top;
    if(item){
      let newItem = item.next;
      this.top = newItem;
      return item; 
    }
  }
  
  findMin(){
    let node = this.top;
    let min = 0
    while (node){
      if(node < min){
        min = node.data;
      }
      node = node.next;
    }
    return min;
  }
  peek(){
    return this.top;

  }
  sort(){

  }
}

class Queue{
  constructor(){
    
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
