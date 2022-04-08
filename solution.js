// const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(data){
    const newNode = new Node(data)
    if(this.top === null){
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
  }

  pop(){
    let item = this.top
    this.top = this.top.next
    return item
  }

  size(){
    let currentNode = this.top
    let counter = 0
    while(currentNode){
      currentNode = currentNode.next
      ++counter
    }
    return counter
  }

  isEmpty(){
    
  }
}

class Queue{

}


module.exports = {
  Node,
  Queue,
  Stack,
};
