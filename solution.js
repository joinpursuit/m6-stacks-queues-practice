const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
const { timeStamp } = require("console");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.len = 0;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.len++;
    return this.top.data;
  }

  size() {
    return this.len;
  }

  pop() {
    if (this.top === null) return null;
    const temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.len--;
    return temp;
  }

  isEmpty() {
    return this.len === 0;
  }

  findMin() {
    let minValue = Infinity;
    let current = this.top;
    while (current) {
      if (current.data < minValue) {
        minValue = current.data;
      }
      current = current.next;
    }
    return minValue;
  }

  peek() {
    return this.top ? this.top : null;
  }

  sort() {
    // let sorted = new Stack();
    // while (!this.isEmpty()) {
    //   console.log(this.pop());
    //   sorted.push(this.pop());
    // }

    // // let sorted = new Stack()
    // // while(!inputStack.isEmpty()) {
    // while (!sorted.isEmpty()) {
    //   let tmp = sorted.pop();
    //   //console.log(tmp)
    //   while (this.length > 0 && tmp.data > this.peek()) {
    //     sorted.push(this.pop());
    //   }
    //   this.push(tmp);
    // }
    //console.log(sorted)
    let arr = []
    let current = this.top
    while (current) {
      arr.push(current.data)
      current = current.next
    }
  
    arr.sort((a, b) => b < a ? -1 : 1).map(el => {
      this.push(el)
    })
   
}
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    // this.max;
  }

  count() {
    return this.size;
  }

  dequeue() {
    if (this.first === null) return null;
    const temp = this.first;
    this.first = temp.next;

    if (this.first === null) {
      this.last = null;
    }

    temp.next = null;
    this.size--;
    return temp.data;
  }

  enqueue(data) {
    const node = new Node(data);
    if (this.last !== null) {
      this.last.next = node;
    }
    this.last = node;
    if (this.first === null) {
      this.first = node;
    }

    this.size++;
    return this.size;
  }

  findMax() {
    let maxValue = -Infinity;
    let current = this.first;
    while (current) {
      if (current.data > maxValue) {
        maxValue = current.data;
      }
      current = current.next;
    }
    return maxValue;
  }

  getLast() {
    return this.last ? this.last : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.first ? this.first : null;
  }
}

wordStack = new Stack();
for (let word of words) {
  wordStack.push(word);
}
// console.log({wordStack})
// console.log(wordStack.sort())
// console.log(wordStack.isEmpty())
// console.log(wordStack.size())
wordStack.sort()

// numStack = new Stack();
// for (let num of nums) {
//   numStack.push(num);
// }
// console.log(numStack.peek())
// numStack.sort();
// console.log(numStack.peek())
// let sortedNums = numStack.sort(numStack)
// console.log("sortedNums", sortedNums)

module.exports = {
  Node,
  Queue,
  Stack,
};
