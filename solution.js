const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next){
      this.data = data
      this.next = next //pointer
  }
}

class Stack {
  constructor(top = null){
    this.top = top; //top of stack
  }

  push(value){
    const newStack = new Node(value); //new node
    newStack.next = this.top; // pointer to top of stack
    this.top = newStack  //new node on top of stack
  }

  pop(){
    let oldTop = this.top; //line 13
    if(oldTop){ //if truthy,
      let newTop = oldTop.next; //new pointer
      this.top = newTop //new stack 
      return oldTop; //pop removes last element in arr & returns element
    }
  }

  size(){
    let valueOfSize = 0;
    // console.log(inspect(this.top, {color: true, depth:12}))
    let currentNode = this.top //current node is at the top of the stack
    while(currentNode !== null){ //while current node isn't empty
      valueOfSize++ //incrementing by one
      // console.log(valueOfSize)
      currentNode = currentNode.next //pointer
    }
    return valueOfSize; //return size number
  }

  isEmpty(){
    return this.top === null;
  }

  peek(){
    return this.top;
  }


  findMin() {
    //> output: number
    let minimum = this.top.data;  //0
    console.log(minimum)

    let currentItem = this.top //> start
    while(currentItem !== null) { //current item is not empty,
      //> compare a number to a number
      if (currentItem.data < minimum) {//comparing values with .data
        minimum = currentItem.data;
      }
      currentItem = currentItem.next //> next value
    }

    return minimum; //> return a number
  }

  sort() {
    //> start, ..., next
    let minimumValue = this.top; 
    console.log(minimumValue)

    let currentItem = this.top //updates if it's the minimum value
    console.log(currentItem)
    while(currentItem !== null) {
      //> compare a `number` to a `number`
      if (currentItem.data < minimumValue.data) {
        minimumValue = currentItem;
        console.log(minimumValue)
      }
      //> next item
      currentItem = currentItem.next 
      console.log(currentItem)
    }
    minimumValue.next = this.top //min value goes to the top of stack
    this.top = minimumValue
    
    return minimumValue; 
    // moving through the linked list
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxValue = 0;
  }
}










module.exports = {
  Node,
  Queue,
  Stack,
};
