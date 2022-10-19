const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
   this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = top;
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
    //creates a new Node, pushes it to the top of the stack, and then creates another new node to immediately take its place.
  }

  size() {
    let count = 0;
    let temporaryNode = this.top;
    while (temporaryNode) {
      temporaryNode = temporaryNode.next;
      count++;
    }
    return count;

    //the size of the stack is established at zero. A temporary node is made and placed at the top of the stack. While the temporary node exists, it will create another temporary node and store it to be used next when the stack is called. The count of temporary nodes created is returned as a final count.
  }

  pop() {
    if (this.top === null) {
      throw new Error("The stack is currently empty.");
    }
    let removedItem = this.top;
    if (removedItem) {
      let newItem = removed.next;
      this.top = newItem;
      return removedItem;
    }
    //If pop is called, and the node at the top of the stack is null, an error is thrown. The popped or removed item is attributed to the currently top of the stack. If and when its called, a new space to house a removed stack is created and immediately and renews.
  }

  isEmpty() {
    return this.top === null;
    //a function that will return a truthy value should it be called upon a stack with a currently un-renewed top index.
  }

  peek() {
    return this.top;
    //when called on a stack, returns the index located at the top
  }

  findMin() {
    let newArray = [];
    let temporaryNode = this.top;
    while (temporaryNode) {
      newArray.push(temporaryNode.data);
      temporaryNode = temporaryNode.next;
    }
    return Math.min(...newArray);
  }
  //Called to find the Node containing a stack with the least amount of entries. A new array is created to house x number of observable Nodes. Each node is pushed in with the data is houses, in order, so long as a Node with data exists. Math min is called and spread throughout the entierty of the array and returns the appropriate Node.
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
      this.max = newItem.data;
    } else {
      this.last.next = newItem;
      this.last = newItem;
      this.last.next = newItem;
      this.max = this.max > newItem.data ? this.max : newItem.data;
    }
    this.size++;
    return this.size;
  }
  //Should the first entry of the queue be nothing, enqueue creates a new Node with which to store into the queue. Should there be data in the first space, the next and last of the queue are then filled with a new Node/item. A maximum size for the queue is created and size is incremented for every new Node/data.
  dequeue() {
    if (this.first === null) {
      throw new Error("The queue is currently empty.");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }
  //To remove from the queue; if there is nothing located in the first index of the queue an error is thrown. The item to be dequeue'd is then established as a variable and ran through a conditional. If the first entry is equivalent to the last, the entry is removed. The first index of what is to be removed is then filled with the next data in question
  peek() {
    return this.first;
    //Called to view the first Node/item in the queue and returns it.
  }
  isEmpty() {
    return !this.first;
    //Called on a queue to verify if it is void of all data and returns a boolean should that be so.
  }
  count() {
    return this.size;
    //Called on queue to return the amount of individual data that are stored within.
  }
  getLast() {
    if (!this.first) {
      throw new Error("Sorry, No Nodes here.");
    }
    let temporaryNode = this.first;
    while (temporaryNode.next) {
      temporaryNode = temporaryNode.next;
    }
    return temporaryNode;
    //Conditional established to throw an error if theres no queue entries at all. While the data exists within the queue, it is cycled through until the next value is null/undefined. It then returns the Node that it stops on.
  }
  findMax() {
    return this.max;
    //Called to refer to the maximum amount of entries stored in the queue.
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
