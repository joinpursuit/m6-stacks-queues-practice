const { nums, words } = require('./data/data.js');
const { inspect } = require('util');

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

  size() {
    let count = 0;
    let item = this.top;
    while (item) {
      count++;
      item = item.next;
    }
    return count;
  }

	push(data) {
		let newData = new Node(data);
		newData.next = this.top;
		this.top = newData;
	}

	peek() {
		if (!this.top) {
			throw new Error('Stack aint stackin');
		}
		return this.top;
	}

	pop() {
		if (!this.top) {
			throw new Error('Stack aint stackin');
		}
		let item = this.top;
		if (item) {
			let newItem = item.next;
			this.top = newItem;
			return item;
		}
	}

	isEmpty() {
		return !this.top 
	}

	toArray() {
		let array = [];
		let item = this.top;
		while (item) {
			array.push(item.data);
			item = item.next;
		}
		return array;
	}

	findMin() {
		let array = this.toArray();
		return Math.min(...array);
	}

	sort() {
		let array = this.toArray();
		let sorted = array.sort();
		this.top = null;
		while (sorted.length > 0) {
			let item = sorted.pop();
			this.push(item);
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
		if (this.first === null) {
			this.first = newItem;
			this.last = newItem;
		} else {
			this.last.next = newItem;
			this.last = newItem;
		}
		return ++this.size;
	}

	count() {
		return this.size;
	}

	isEmpty() {
		return this.first === null;
	}

	dequeue() {
		if (this.first == null) {
			throw new Error('Try again friend');
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
		if (!this.first) {
			throw new Error('Try again pal');
		}
		return this.first;
	}

	getLast() {
		return this.last;
	}

	findMax() {
		let array = [];
		let item = this.first;
		while (item) {
			array.push(item.data);
			item = item.next;
		}
		return Math.max(...array);
	}
}

module.exports = {
	Node,
	Queue,
	Stack,
};
