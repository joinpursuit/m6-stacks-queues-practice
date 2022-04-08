const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
const { threadId } = require("worker_threads");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0
  }

  // methods
  count(){}
  dequeue(){}
  enqueue(){}
  // findMax data value
  findMax(){}
  // getLast node
  getLast(){}
  // isEmpty check if list is empty
  isEmpty(){}
  // peek the first node
  peek(){}
}

class Stack {
  constructor(top = null){
    this.top = top;
  }
  // Methods
  /*
    1. create a new node
    2. the next new node points to the top of the stack.
    3. the top of the stack is now the new node.
  */
  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  /*
    1. Set a counter to zero, to start size at zero.
    2. node is at the top.
    3. while there is a node, increase the count by 1.
    4. node points to the next node. continue while loop.
    5. Return count, which has increased once every time there was a node.
   */
  size(){
    let count = 0;
    let node = this.top;
    while (node){
      count++;
      node = node.next;
    }
    return count;
  }
  /*
    1. Guard clause - if the top is null, there's nothing in the list.
    2. Return null, because the list is empty.
    3. set node to the top.
    4. While there is a node in the list...
    5. this.top is reassigned to the pointer for the next node.
    6. Because the pointer for top shifts to the next node, the original top is abandoned.
    6. Return the node.
  */
  pop(){
    if (this.top === null){
      return null;
    }
    let node = this.top;
    if (node){
      this.top = node.next;
    }
    return node;
  }
  // check if list is empty
  /*
    1. If the top is null, there is nothing in the list.
    2. Return true if there's nothing.
    3. Else, return false if there is a value.
  */
  isEmpty(){
    if (this.top === null){
      return true;
    } else {
      return false;
    }
  }
  // findMin data value
  /*
    1. set node to be the top.
    2. while there is a node,
    3. Check to see if the node is smaller than the next node.
    4. If the node is smaller, set the head to be the smaller node.

  */
  findMin(data){
    // let node = this.top;
    // while (node){
    //   if (node.data < node.next){
    //     this.top = node.data;
    //     node = this.top;
    //   }
    //   // console.log("WhatIsnode.data:", node.data)
    //   // console.log("WhatIsnode.next.data:", node.next.data)
    // node = node.next;
    // }
    // return node;
  }
  // peek top node
  /*
    1. Guard clause - if the top is null, the list is empty. Throw an error.
    2. See the value of the top node's data by returning it
  */
  peek(){
    if (this.top === null){
      throw new Error("Error: The stack is empty ");
    }
    return this.top;
  }
  // sort - sort the stack into ascending order. CHALLENGE only use stacks to achieve this (no arrays or objects etc.)
  sort(){}
}


module.exports = {
  Node,
  Queue,
  Stack,
};
