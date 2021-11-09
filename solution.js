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

	push(data) {
		let newNode = new Node(data);
		newNode.next = this.top;
		this.top = newNode;
	}

	size() {
		let count = 0;
		let node = this.top;
		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}

	isEmpty() {
		return this.top === null;
	}

	peek() {
		if (this.isEmpty()) throw new Error("The stack is empty!");
		return this.top;
	}

	pop() {
		if (this.isEmpty()) throw new Error("The stack is empty!");
		if (this.top) {
			let node = this.top;
			this.top = node.next;
			return node;
		}
	}

	findMin() {
		let node = this.top;
		let currNodeVal = node.data;

		while (node.next !== null) {
			if (currNodeVal > node.next.data) {
				currNodeVal = node.next.data;
			}
			node = node.next;
		}
		return currNodeVal;
	}

	// sort the stack into ascending order
	// largest element has to go into the stack first OR
	// find the minValue and unshift it into the stack
	//  add a new node to the top --- top.next points to previous top
	sort() {
		let node = this.top;
		let currValue = node.data;

		while (node.next !== null) {
			// find the minVal
			// remove minVal out of the stack
			// set minVal to the top of the stack ... unshift??? adds new items to the beginning of an array
			//  ??? would it be easier to find the max and work backwards???
			node = node.next;
		}
		return sortedStack;
	}
}
// if (currValue > node.next.data) {
// 	currValue = node.next.data;
// }
// this.top = currValue;

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
		this.max = 0;
	}

	isEmpty() {
		return this.first === null;
	}

	count() {
		let countNodes = 0;
		let node = this.first;
		while (node) {
			countNodes++;
			node = node.next;
		}
		return countNodes;
	}

	enqueue(data) {
		let node = new Node(data);
		if (this.isEmpty()) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
	}

	dequeue() {
		if (this.isEmpty()) throw new Error("The queue is empty!");
		if (this.first === this.last) {
			this.last = null;
		}

		let dequeued = this.first;
		this.first = this.first.next;
		this.size--;
		return dequeued.data;
	}

	peek() {
		if (this.isEmpty()) throw new Error("The queue is empty!");
		return this.first;
	}

	getLast() {
		let node = this.first;
		if (!this.first) return null;

		while (node.next) {
			node = node.next;
		}
		return node;
	}

	findMax() {
		let node = this.first;
		let currVal = node.data;

		while (node.next !== null) {
			if (currVal < node.next.data) {
				currVal = node.next.data;
			}
			node = node.next;
		}
		return currVal;
	}
}

module.exports = {
	Node,
	Queue,
	Stack,
};
