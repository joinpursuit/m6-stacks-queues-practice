const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }
  push(data) {//<--this is data that you are accepting into your stack
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  size() {
    let node = this.top
    let count = 0
    while (node) {
      count++
      node = node.next
    }
    return count
  }


pop(){
  let item = this.top;
  if (item) {
    let newItem = item.next;
    this.top = newItem;
    return item;
  }
}


isEmpty(){
  return this.top === null;

}
findMin(){
  let node = this.top;
  let min =  0
  while(node){
    if (node < node.next){
      min = node.data
    }
    node = node.next
  }
  return min
}

peek(){
  return this.top
}

sort(){

}


}




class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
}



















module.exports = {
  Node,
  Queue,
  Stack,
};
