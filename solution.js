const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

class Queue{

}

class Stack{

}

module.exports = {
  Node,
  Queue,
  Stack,
};
