//Dependencies
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

  pop(){
    if(this.top === null){
      throw new Error("The stack is empty");
    };
    let temp = this.top;
    if(temp){
      let newTemp = temp.next;
      this.top = newTemp;
      return temp;
    }
  };

  size(){
    let count = 0;
    let temp = this.top;
    while(temp){
      count++;
      temp = temp.next;
    };
    return count;
  };

  isEmpty(){
    return this.top === null;
  };

  findMin(){
    let temp = this.top;
    while(temp){
      if(this.top < temp.next){
        temp.next = temp.next.next;
      } else if(this.top > temp.next){
        this.top = temp.next;
      };
    };
    return temp.data;
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
