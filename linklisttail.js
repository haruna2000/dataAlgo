class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkListTail {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return this.head;
  }
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;

    return this.tail;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      let value = this.head.value;
      this.head = this.head.next;
      console.log(this.head);
      return value;
    }
  }

  removeFromBack() {
    let value = this.tail.value;
    if (this.isEmpty()) {
      return null;
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
      console.log(prev);
    }
  }
  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let items = "";
      let curr = this.head;
      while (curr) {
        curr = curr.next;
        items += `${curr.value}  `;
      }
      return items;
    }
  }
}

let list = new LinkListTail();
list.prepend(555);
list.prepend(666);
// list.prepend(777);
// list.prepend(888);

list.append(11);
list.append(22);
// list.append(33);
// list.append(44);
console.log(list.head);
console.log(list.tail);
console.log(list.removeFromFront());
console.log(list.removeFromBack());
console.log(list.print());
