const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor (top = null) {
    this.top = top;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  };

  size(){
    let count = 0;
    let node = this.top;
    while(node){
      count++;
      node = top.next;
    };
  };

  pop(){
    if(!this.top) return null;
    let popData = this.top.data; 
    this.top = this.top.next;
    return popData;
  }

  isEmpty(){
    return this.top === null;
  }

  findMin(){
  
}
}


module.exports = {
  Node,
  Queue,
  Stack,
};
