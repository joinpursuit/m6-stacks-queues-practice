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
    let min = this.top.data;
    let currentNode = this.top;
    while(currentNode){
    
        if(currentNode.data < min) {
            min = currentNode.data;
        } 
        currentNode = currentNode.next;
    }
    return min;
  }

  sort() {
    let current = this.top;
    while (current.next) {
      let next = current.next;
      if (current.data > next.data) {
        let temp = current.data;
        current.data = next.data;
        next.data = temp;
        current.next = next;
      }
      current = current.next;
    }
   let node = this.top;
    while (node.next) {
      if (node.data > node.next.data) {
        return this.sort();
      }
      node = node.next;
    }
    return this.top
  }
}


module.exports = {
  Node,
  Queue,
  Stack,
};
