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
    this.head = null;
  }

  push(data){
    const newNode = new Node(data)
  }
}

class Queue{

}


module.exports = {
  Node,
  Queue,
  Stack,
};
