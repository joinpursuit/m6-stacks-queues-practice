const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// - Create a Node class with properties
class Node{
  constructor(data){
    this.data = data;//- data
    this.next = null;//- next
  }
}
class Stack{
  constructor(top = null){
    this.top = top;
  }
  // - Stack methods

  // - `push`
  push(data){
    const newItem = new Node(data)
    newItem.next = this.top
    this.top = newItem
  }
  // - `size`
  size(){
    let count = 0;
    let newItem = this.top;
    while(newItem){
      count++; 
     newItem = newItem.next
    }
    return count
  }
  // - `pop`
  pop(){
    if(this.isEmpty()){
      console.log("We gots no stacks !!!")
    }
    const item = this.top;
    if(item){
      let newItem = item.next
      this.top = newItem
      return item
    }
  }
  // - `isEmpty` check if list is empty
  isEmpty(){
    return this.top === null ? true : false
  }
  // - `findMin` data value
  findMin(){
    let minimum = this.top.data
    let node = this.top
    
    while(node){
      if(minimum > this.next){
        minimum = this.next
        
      }

      node = this.next
    }
    return minimum
  }
  // - `peek` top node
  peek(){
   
    return this.top
  }
  // - `sort` - sort the stack into ascending order. **CHALLENGE** only use stacks to achieve this (no arrays or objects etc.)
  sort(){
  //   let arr = [];
  //   let tempNode = this.top;
  //   while (tempNode) {
  //     arr.push(tempNode.data);
  //     tempNode = tempNode.next;
  //   }

  //   arr.sort();
  //   tempNode = this.top;

  //   for (let i = 0; i < arr.length; i++) {
  //     tempNode.data = arr[i];
  //     tempNode = tempNode.next;
  //   }
  // }
  }
}


class Queue{
constructor(){
  this.first = null ;
  this.last = null;
  this.size = 0;
  this.max = this.first
}


// - Stack methods
count(){
  // return this.size;
  let count = 0;
  let current  =  this.first
  
  while(current){
    count += 1
    current = current.next
  }
  return count
}

//   - `count`
dequeue(){
 
  if(this.first === this.last){
    this.last = null
  }else{
    const item = this.first
    this.first = this.first.next
    --this.size
    return item.data
  }
}
//   - `dequeue`
enqueue(data){
  let newItem = new Node(data)
  if(!this.first){
    this.first = newItem;
    this.last  = newItem;
  }else{
    this.last.next = newItem;
    this.last = newItem;
  }
  return ++this.size
}
//   - `enqueue`
findMax(){
  let maximum = this.first
  let node = this.first

  while(node){
    if(maximum.data < node.data ){
      maximum = node
    }
    node = node.next
}
  return maximum.data
}
//   - `findMax` data value
getLast(){
  return this.last
}
//   - `getLast` node

isEmpty(){
  return !this.first
}
//   - `isEmpty` check if list is
peek(){
  return this.first
}
}

const Pancakes = new Queue()
Pancakes.enqueue(null)
Pancakes.enqueue("apples")
Pancakes.enqueue(true)
// console.log(Pancakes.count())

module.exports = {
  Node,
  Queue,
  Stack,
};
