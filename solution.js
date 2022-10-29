const { nums, words } = require("./data/data.js");
 const { inspect } = require("util");
 const { listenerCount } = require("process");

 class Node {
   constructor(data) {
     this.data = data; //- data
     this.next = null; //- next
   }
 }
 class Stack {
   constructor(top = null) {
     this.top = top;
   }
   push(data) {
     const newItem = new Node(data);
     newItem.next = this.top;
     this.top = newItem;
   }
   isEmpty() {
     return this.top === null;
   }
   pop() {
     if (this.isEmpty()) {
       console.log("We gots no stack!!!!");
     }
     const item = this.top;
     if (item) {
       let newItem = item.next;
       this.top = newItem;
       return item;
     }
   }
   size() {
     let count = 0;
     let newItem = this.top;
     while (newItem) {
       count++;
       newItem = newItem.next;
     }
     return count;
   }
   peek() {
     if (this.isEmpty()) {
       throw new Error("stack is empty!");
     }
     return this.top;
   }
   findMin() {
     let minimum = this.top.data;
     let node = this.top;

     while (node) {
       if (minimum > this.next) {
         minimum = this.next;
       }
       node = this.next;
     }
     return minimum;
   }
   toArray() {
     let arr = [];
     let item = this.top;
     while(item) {
       arr.push(item.data)
       item = item.next
     }
     return arr
   }
   sort() {
     let arr = this.toArray().sort();
     this.top = null;
     while(arr.length > 0){
       let node = arr.pop();
       this.push(node);
     }
   }
 }

 class Queue {
   constructor() {
     this.first = null;
     this.last = null;
     this.size = 0;
   }
   enqueue(data) {
     let newItem = new Node(data);
     if (!this.first) {
       this.first = newItem;
       this.last = newItem;
     } else {
       this.last.next = newItem;
       this.last = newItem;
     }
     return ++this.size;
   }
   dequeue() {
     if (this.first === null) {
       throw new Error("The queue is empty");
     }
     let item = this.first;
     if (this.first === this.last) {
       this.last = null;
     }
     this.size--;

     return item.data;
   }
   count() {
     return this.size;
   }
   isEmpty() {
     return this.first === null;
   }
   peek() {
     if (this.first === null) {
       throw new Error("This queue is empty!");
     }
     return this.first;
   }
   getLast() {
     return this.last
   }
   findMax() {
     let arr = []
     let node = this.first
     while(node){
       arr.push(node.data)
       node = node.next
     }
     return Math.max(...arr)
   }
 }

 module.exports = {
   Node,
   Queue,
   Stack,
 };
