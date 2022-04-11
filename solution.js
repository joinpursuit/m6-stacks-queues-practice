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
  push(){

  };

  size(){

  };

  pop(){

  };

  isEmpty(){

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
