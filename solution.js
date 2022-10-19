const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
const { NODATA } = require("dns");

class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}
class Stack {
	constructor(top) {
		this.top = top;
	}
	push(value) {
		let current = this.top;
		this.top = new Node(value);
		this.top.next = current;
	}
	size() {
		let count = 0;
		let current = this.top;
		while (current !== undefined) {
			count++;
			current = current.next;
		}
		return count;
	}
	pop() {
		let current = this.top;
		this.top = this.top.next;
		return current;
	}
	isEmpty() {
		return this.top === undefined;
	}
	findMin() {
		let min = this.top.data;
		let current = this.top;
		while (current !== undefined) {
			if (min > current.data) {
				min = current.data;
			}
			current = current.next;
		}
		return min;
	}
	peek() {
		return this.top;
	}
	sort() {
		const swap = (left, right) => {
			left.next = right.next;
			right.next = left;
		};
		let current = this.top;
		while (current.next !== undefined) {
			if (current.data.localeCompare(current.next.data) <= 1) {
				swap(current, current.next);
			}
			current = current.next;
		}
	}
}
class Queue {
	constructor(first, last, size, max) {
		this.first = first;
		this.last = last;
		this.size = size;
		this.max = max;
	}
	count() {
		let current = this.first;
		let counter = 0;
		while (current !== undefined) {
			counter++;
			current = current.next;
		}
		return counter;
	}
	dequeue() {
		const popped = this.first;
		this.first = this.first.next;
		this.size--;
		return popped.data;
	}
	enqueue(value) {
		const node = new Node(value);
		if (this.first === undefined) {
			this.first = node;
		} else {
			this.last.next = node;
		}
		this.last = node;
		this.size++;
	}
	findMax() {
		let current = this.first;
		let max = this.first.data;
		while (current.next !== undefined) {
			if (current.data > max) {
				max = current.data;
			}
			current = current.next;
		}
		return max;
	}
	getLast() {
		return this.last;
	}
	isEmpty() {
		return !this.first;
	}
	peek() {
		return this.first;
	}
}
module.exports = {
	Node,
	Queue,
	Stack,
};
