// Dependencies
const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  };
};

class Stack{
  constructor(top = null){
    this.top = top;
  };
  /////////////////// Stack Methods////////////////
  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  };

  size(){

  };

  pop(){

  };

  isEmpty(){
    if(this.top = null){
      return true;
    } else{
      return false;
    };
  };

  findMin(){

  };

  peek(){

  };

  sort(){

  };

};



module.exports = {
  Node,
  // Queue,
  Stack,
};
