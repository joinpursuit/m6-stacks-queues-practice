const { nums, words } = require('./data/data.js')
const { inspect } = require('util')

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor(top = null) {
    this.top = top
  }

  push(data) {
    const newItem = new Node(data)
    newItem.next = this.top
    this.top = newItem
  }

  size() {
    let count = 0
    let node = this.top
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  pop() {
    if (this.top == null) {
      throw new Error('The stack is empty')
    }
    let item = this.top
    if (item) {
      let newItem = item.next
      this.top = newItem
      return item
    }
  }

  isEmpty() {
    return this.top === null
  }

  findMin() {
    let array = []
    let node = this.top
    while (node) {
      array.push(node.data)
      node = node.next
    }
    return Math.min(...array)
  }

  peek() {
    return this.top
  }

  sort() {
     
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
    this.max = null
  }
  enqueue(data) {
    let newItem = new Node(data)
    if (!this.first) {
      this.first = newItem
      this.last = newItem
    } else {
      this.last.next = newItem
      this.last = newItem
    }
    return this.size++
  }

  dequeue() {
    if (this.first == null) {
      throw new Error('The queue is empty')
    }
    const item = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return item.data
  }

  count() {
    return this.size
  }

  isEmpty() {
    return this.first === null
  }

  peek() {
    return this.first
  }
  getLast() {
    if (!this.first) {
      throw new Error('no nodes')
    }
    let node = this.first
    while (node.next) {
      node = node.next
    }
    return node
  }

  findMax() {
    let currentMax = null
    let node = this.first
    while (node) {
      if (node.data > currentMax) {
        currentMax = node.data
      }
      node = node.next
    }
    this.max = currentMax
    return this.max
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
}
