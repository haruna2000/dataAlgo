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

// class Queue {
//   constructor(que = []) {
//     this.data = que;
//   }
//   isEmpty() {
//     return this.data.length === 0 ;
//   }
//   enqueue(value) {
//     this.data.push(value);
//   }
//   dequeue() {
//     return this.data.shift();
//   }
//   size() {
//     return this.data.length;
//   }
//   peek() {
//     if (!this.data) {
//       return null;
//     }
//     return this.data[this.data.length - 1];
//   }
//   print() {
//     return this.data.toString();
//   }
// }

// const queue = new Queue([2, 5, 4, 6, 8, 1]);
// console.log( queue.enqueue( 12 ) );
// console.log(queue.isEmpty());

// console.log(queue.print());
// console.log(queue.peek());

// class Queue{
//     constructor () {
//         this.data = {}
//         this.real = 0
//         this.front = 0
//     }

//     print() {
//         return this.data
//     }
//     enqueue( value ) {
//         this.data[this.real] = value
//         this.real++
//     }
//     dequeue() {
//         let front = this.data[this.front]
//         delete this.data[this.front]
//         this.front++
//         return front
//     }
//     peek() {
//         return this.data[this.front]
//     }
//     size() {
//         return this.real -this.front
//     }
//     isEmpty() {
//         return this.real - this.front === 0
//     }
//     print() {
//         console.log(this.data)
//     }
// }

class Queue {
  constructor() {
    this.data = {};
    this.real = 0;
    this.front = 0;
  }
  enqueue(value) {
    this.data[this.real] = value;
    this.real++;
  }
  dequeue() {
    let data = this.data[this.front];
    delete this.data[this.front];
    this.front++;
    return data;
  }
  peek() {
    if (this.size() !== 0) {
      return this.data[this.front];
    }
    return null;
  }
  size() {
    let size = this.real - this.front;
    if (size <= 0) {
      return 0;
    }
    return size;
  }
  isEmpty() {
    // console.log(this.real - this.front);
    return this.size() <= 0;
  }
  print() {
    return this.data;
  }
}

const queue = new Queue();
queue.enqueue(44);
queue.enqueue(12);
queue.enqueue(4);
queue.enqueue(56);
queue.enqueue(9);
queue.dequeue();
console.log(queue.data);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.print());
