const { nums, words } = require("./data/data.js");
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
}

class Queue{

}


module.exports = {
  Node,
  Queue,
  Stack,
};
