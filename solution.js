const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const words = [
//   "the",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
  }
  push(value){
    // console.log(value);
    const newNode = new Node(value); 
    newNode.next = this.top; 
    this.top = newNode;
  }
  pop(){
    if(this.top === null) return null;
    // console.log(inspect(this.top,{color:true, depth:10}))
    let temp = this.top;
    // console.log(temp);
    this.top = this.top.next;
    return temp;
  }
  size(){
    let count = 0;
    let temp = this.top;
    while(temp){
      count++;
      temp = temp.next;
    }
    return count;
  }
  isEmpty(){
    return this.top === null;
  }
  peek(){
    return this.top;
  }
  findMin(){
    if(!this.top) return null;
    let min = this.top.data;
    let temp = this.top;
    while(temp){
      if(temp.data < min){
        min = temp.data;
      }
      temp = temp.next;
    }
    return min;
  }
  sort(){
    
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value){
    let newNode = new Node(value);
    //if the queue is empty then assign the first node and last node to be the newNode
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{ //if it is not then...
      // **remember inside a queue the only thing you care about is at the end ...always shifting the end
      //take the current node and assign the .next property value as the "New Node". .next points to the new Node
      this.last.next = newNode;
      //this will shift over the node to the left and create that queue effect. adds values onto the right 
      this.last = newNode;
    }
  }
  dequeue(){
    //first check if the area is empty
    if(!this.first === null){
      return `Cant return from an empty`;
    } 
    if(this.first === this.last){ //check if there is only one value
      this.first = null;
      this.last = null;
    }
    let temp = this.first; //assign temp as a variable to point this.first
    this.first = this.first.next; //shift the first one over to the next one to dequeue
    return temp.data; //return the temporary variables data (of this.first) that was removed 
  }
  count(){
    let count = 0;
    let temp = this.first;
    while(temp){
      count++;
      temp = temp.next;
    }
    return count;
  }
  isEmpty(){
    return this.first === null || this.last === null;
  }
  peek(){
    return this.first;
  }
  getLast(){
    if(this.isEmpty()) return `Cannot get last from an empty queue`;
    return this.last;
  }
  findMax(){
    if(!this.first) return null;
    let max = 0;
    let temp = this.first;
    while(temp){
      if(temp.data > max){
        max = temp.data;
      }
      temp = temp.next;
    }
    return max;
  }
}

// let wordStack = new Stack();
// let numStack = new Stack();
// let wordQueue = new Queue();
// let numQueue = new Queue();
// let emptyQueue = new Queue()

// for(let num of nums){
//   numStack.push(num);
//   numQueue.enqueue(num);
// }

// for(let word of words){
//   wordStack.push(word);
//   wordQueue.enqueue(word)
// }

// console.log(numStack)

// console.log(numQueue)

// // console.log(numStack.findMin())
// console.log(numQueue.count())
// console.log(numQueue.isEmpty())
// console.log(numQueue.peek())
// console.log(emptyQueue.getLast())


module.exports = {
  Node,
  Queue,
  Stack,
};