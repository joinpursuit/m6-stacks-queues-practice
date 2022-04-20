const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

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
    const newNode = new Node(value); 
    newNode.next = this.top; 
    this.top = newNode;
  }
  pop(){
    if(this.top === null) return null;
    let temp = this.top;
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
  toArray(){
    let array = [];
    let temp = this.top;
    while(temp){
      array.push(temp.data);
      temp = temp.next;
    }
    return array;
  }
  containsString(array){
    const arrayEntries = array.entries();
    for(let element of arrayEntries){
      if(typeof element[1] === "number"){
        return false
      } else{
        return true;
      }
    }
  }
  sort(){
    let thisArray = this.toArray();
    if(this.containsString(thisArray)){
      thisArray.sort();
    }else{
      thisArray.sort((a, b) =>  b - a );
    }
    this.top = null;
    for(let i=thisArray.length; i>= 0; i--){
      this.push(thisArray[i])
    }
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
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
  }
  dequeue(){
    if(!this.first === null){
      return `Cant return from an empty`;
    } 
    if(this.first === this.last){
      this.first = null;
      this.last = null;
    }
    let temp = this.first;
    this.first = this.first.next;
    return temp.data; 
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

module.exports = {
  Node,
  Queue,
  Stack,
};