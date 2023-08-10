// // class QueueCircle {
// //   constructor(capacity) {
// //     this.data = new Array(capacity);
// //     this.capacity = capacity;
// //     this.currentLength = 0;
// //     this.real = -1;
// //     this.front = -1;
// //   }

// //   isFull() {
// //     return this.currentLength === this.capacity;
// //   }
// //   isEmpty() {
// //     return this.currentLength === 0;
// //   }
// //   enqueue(element) {
// //     if (!this.isFull()) {
// //       this.real = (this.real + 1) % this.capacity;
// //       this.data[this.real] = element;
// //       this.currentLength++;
// //       if (this.front === -1) {
// //         this.front = this.real;
// //       }
// //     }
// //   }
// //   dequeue() {
// //     if (this.isEmpty()) {
// //       return null;
// //     }
// //     let item = this.data[this.front];
// //     this.data[this.front] = null;
// //     this.front = (this.front + 1) % this.capacity;
// //     this.currentLength--;
// //     if (this.isEmpty()) {
// //       this.front = this.real = -1;
// //     }
// //     return item;
// //   }
// //   peek() {
// //     if (this.isEmpty()) {
// //       return null;
// //     }
// //     return this.data[this.front];
// //   }
// //   print() {
// //     if (this.isEmpty()) {
// //       console.log("Queue is empty");
// //     } else {
// //       let i;
// //       let str = "";
// //       for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
// //         str += this.data[i] + "";
// //       }
// //       str += this.data[i];
// //       console.log(str);
// //     }
// //   }
// // }
// // let cq = new QueueCircle(6);
// // cq.enqueue(1);
// // cq.enqueue(152);
// // cq.enqueue(4);
// // cq.enqueue(1);
// // cq.enqueue(10);
// // cq.enqueue(42);
// // cq.dequeue();
// // cq.enqueue(11);
// // cq.enqueue(15);
// // console.log(cq.peek());
// // console.log(cq);
// // cq.print();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   prepend(value) {
//     let node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }

//     this.size++;
//   }
//   insert(value, index) {
//     if (this.isEmpty()) {
//       return null;
//     } else if (index > this.size || index < 0) {
//       return "index great and list";
//     } else if (index === 0) {
//       this.prepend(value);
//     } else {
//       let node = new Node(value);
//       let curr = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         curr = curr.next;
//       }
//       node.next = curr.next;
//       curr.next = node;
//       this.size++;
//     }
//   }
//   append(value) {
//     let node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       if (prev.next === null) {
//         prev.next = node;
//       }
//     }
//     this.size++;
//   }
//   print() {
//     if (this.isEmpty()) {
//       return "list is empty";
//     } else {
//       let curr = this.head;
//       let listValue = "";
//       while (curr) {
//         listValue += `  ${curr.value}`;
//         curr = curr.next;
//       }
//       console.log(listValue);
//     }
//   }
// }

// let ll = new LinkList();
// ll.prepend(32);
// ll.prepend(31);
// ll.prepend(322);
// // ll.append(12);
// ll.insert(9, 0);
// ll.insert(33, 2);
// ll.insert(98, 1);
// console.log(ll.head);
// ll.print();

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.tail = -1;
    this.front = -1;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  isFull() {
    return this.size === this.capacity;
  }
  size() {
    return this.size;
  }
  enqueue(value) {
    if (!this.isFull()) {
      this.tail++;
      this.items[this.tail % this.capacity] = value;
      this.size++;
      if (this.front === -1) {
        this.front = 0;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    this.items[this.front % this.capacity] = null;
    this.front++;
    this.size--;
    if (this.isEmpty()) {
      this.tail = -1;
      this.front = -1;
    }
  }

  peek() {
    return this.items[this.front];
  }
  print() {}
}

let cq = new CircularQueue(5);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(6);
cq.enqueue(8);
// cq.dequeue();
// cq.dequeue();
// cq.dequeue();
cq.enqueue(16);
cq.enqueue(118);
cq.enqueue(11);
console.log(cq.isEmpty());
console.log(cq.peek());
console.log(cq.items);
