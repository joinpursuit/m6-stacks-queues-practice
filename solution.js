const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }
  isEmpty() {
    return this.top === null
  }

  push(data) {
      const newItem = new Node(data)
      newItem.next = this.top
      this.top = newItem
  }

  pop(){
      if (this.isEmpty()){
        throw newError("We gots no stack!!!!")
      }
      const item = this.top; 
      if (item){ 
        let newItem = item.next
        this.top = newItem 
        return item 
      }
  }

  size() {
    let count = 0;
    let node = this.top;
    while(node) {
        count++;
        node = node.next
    }
    return count
}

  peek(){
      if (this.isEmpty()){
        throw new Error("stack is empty!")
      }
      return this.top
  }

  toArray() {
    let arr = [];
    let item = this.top;
    while (item) {
      arr.push(item.data);
      item = item.next;
    }
    return arr;
  }


  findMin() {
    let arr = this.toArray()
    return Math.min(...arr)
  }

  sort() {
    let arr = this.toArray()
    let sorted = arr.sort()
    this.top = null
    while(sorted.length > 0){
      let item = sorted.pop()
      this.push(item)
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

  count() {
    return this.size
  }

  isEmpty() {
    return this.first === null;
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

  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }

  getLast() {
    return this.last
  }

  findMax() {
    let maxNum = this.first;
    let currentNode = this.first;

    while (currentNode) {
      if (currentNode.data >= maxNum.data) {
        maxNum = currentNode;
      }
      currentNode = currentNode.next;
    }
    return maxNum.data;
}
}

module.exports = {
  Node,
  Queue,
  Stack,
};
