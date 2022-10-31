const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;

  }
}

// Creating a Stack
class Stack {
  constructor(top = null) {
    this.top = top;
  }

  // Can create a new node [ok]
  // Can add to stack using push method [ok]
  push(data) {
    // Creating a new node instance
    const newItem = new Node(data);

    // Node { data: 'the', next: null }
    // Node { data: 'quick', next: Node { data: 'the', next: null } }
    newItem.next = this.top;
    this.top = newItem;
    //console.log(this.top)
  }

  // Can remove from stack using pop method
  pop() {
    // Validating if the stack is empty
    if (this.top == null) {
      throw new Error("The stack is empty");
    }

    // 
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  // Check if stack is empty [ok]
  isEmpty() {
    return this.top === null;
  }

  // Count size of stack [ok]
  size() {
    let stackSize = 0;
    let node = this.top;
    // Logic:
    // Iterate over the stack nodes
    // If node exists
    while (node) {
      stackSize++;
      // Advance to the following node
      //console.log(node.data)
      node = node.next
    }

    return stackSize++;
  }

  // Find minimum data value [ok]
  findMin() {

    let node = this.top;
    const nums = [];

    // Logic:
    // Iterate over the stack nodes
    while (node) {
      //console.log(node.data);
      nums.push(node.data);

      // Advance to the following node
      node = node.next
    }
    return Math.min(...nums);
  }

  // Peek at top of stack [ok]
  peek() {
    if (this.top == null) {
      throw new Error("Stack is empty");
    }
    return this.top;
  }

  // Sort the stack, minimum value on top
  sort() {
    let node = this.top;

    while (node) {
      // console.log(node.data);
      // console.log(node.next.data);


      // Advance to the following node
      node = node.next
    }
    
  }
}

// Creating a queue
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }

  // Can create a new node [ok]
  // Can add to queue using enqueue method [ok]
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
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  // Check if queue is empty [ok]
  isEmpty() {
    return this.first === null;
  }

  // Count size of queue [ok]
  count() {
    let queuekSize = 0;
    let node = this.first;
    // Logic:
    // Iterate over the stack nodes
    // If node exists
    while (node) {
      queuekSize++;
      // Advance to the following node
      //console.log(node.data)
      node = node.next
    }

    return queuekSize++;
  }

  // Peek at first in queue [ok]
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }

  // Get last in queue [ok]
  getLast() {
    return this.last;
  }

  findMax() {
    
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
