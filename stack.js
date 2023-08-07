class Stack {
  constructor(data = []) {
    this.data = data;
  }

  push(value) {
    this.data.push(value);
  }
  pop() {
    this.data.pop();
  }
  isEmpty() {
    return this.data.length === 0;
  }
  peek() {
    return this.data.length - 1;
  }
  size() {
    return this.data.length;
  }
  print() {
    for (let value of this.data) {
      console.log(value);
    }
  }
}

let stack = new Stack([1, 2, 3, 4]);

stack.pop();
stack.push(44);
console.log(stack.isEmpty());
console.log(stack.peek());

stack.print();

class Queue {
  constructor(que = []) {
    this.data = que;
  }
  isEmpty() {
    return this.data;
  }
  enqueue(value) {
    this.data.push(value);
  }
  dequeue() {
    return this.data.shift();
  }
  size() {
    return this.data.length;
  }
  peek() {
    if (!this.data) {
      return null;
    }
    return this.data[this.data.length - 1];
  }
  print() {
    return this.data.toString();
  }
}

const queue = new Queue([2, 5, 4, 6, 8, 1]);
console.log(queue.print());
