const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// console.log('nums:', nums)  
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
// console.log('words:', words)
// [
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
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// A stack is FILO
class Stack {
  constructor(top = null) {
    this.top = top
  }
  isEmpty() {
    return this.top === null
  }
  push(data) {
    let newNode = new Node(data)
    newNode.next = this.top
    this.top = newNode
  }
  size() {
    let length = 0
    let top = this.top
    while (top) {
      length++
      top = top.next
    }
    return length
  }
  pop() {
    let popTop = this.top
    this.top = this.top.next
    return popTop
  }
  peek() {
    return this.top
  }
}

let nStack = new Stack()
for (let el of nums) {
  nStack.push(el)
}
console.log(nStack)  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
nStack.pop()
console.log(nStack)

let wStack = new Stack()
for (let word of words) {
  wStack.push(word)
}
wStack.pop()
console.log(nStack.size())
console.log(wStack.peek())


// A queue is FIFO
class Queue {
  constructor(first = null) {
    this.first = first
    this.last = null
    this.size = null
    this.max = max
  }
}




module.exports = {
  Node,
  Queue,
  Stack,
};
