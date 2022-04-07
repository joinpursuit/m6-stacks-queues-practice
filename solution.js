const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class Stack {
  constructor(top = null) {
    this.top = top;
  }
  push(data) {
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
  }
  size() {
    let node = this.top;
    let s = 0;
    while (node) {
      s++;
      node = node.next;
    }
    return s;
  }
  pop() {
    let node = this.top;
    this.top = this.top.next;
    return node;
  }
  isEmpty() {
    return this.top === null;
  }
  findMin() {
    let min = this.top.data;
    let node = this.top.next;
    while (node) {
      if (node.data < min) min = node.data;
      node = node.next;
    }
    return min;
  }
  peek() {
    return this.top;
  }
  isSorted(node) {
    let n = node;
    while (n && n.next) {
      if (n.data <= n.next.data) {
        n = n.next;
      } else return false;
    }
    return true;
  }
  sort() {
    if (this.isSorted(this.top)) {
      return;
    } else {
      let currNode = this.top;
      let nextNode = this.top.next;
      while (nextNode) {
        let temp = nextNode;

        if (currNode.data > nextNode.data) {
          let val1 = currNode.data;
          let val2 = nextNode.data;
          nextNode.data = val1;
          currNode.data = val2;
        }
        currNode = temp;
        nextNode = temp.next;
      }
      return this.sort();
    }
  }
}

class Queue {}
module.exports = {
  Node,
  Queue,
  Stack,
};
