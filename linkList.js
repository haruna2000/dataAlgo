class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      return null;
    }
    let curr = this.head;
    let value = "";
    while (curr !== null) {
      value += curr.value + " ";
      curr = curr.next;
    }

    return value;
  }
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      return (this.head = node);
    }
    let prev = this.head;
    while (prev.next) {
      prev = prev.next;
      console.log(prev);
    }
    prev.next = node;
    this.size++;
  }

  insert(value, index) {
    if (this.size < index || index < 0) {
      return index + " is to big";
    }

    let node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      return (this.head = node);
      //this.prepend(value)
    }
    let loop = 0;
    let curr = this.head;
    while (loop < index - 1) {
      loop++;
      console.log(loop);
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
    this.size++;
  }

  removeFrom(index) {
    if (index >= this.size || 0 > index) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      //   let curr = this.head;
      //   let loop = 0;

      //   while (loop < index - 1) {
      //     curr = curr.next;
      //     loop++;
      //   }
      //   let next = curr.next;
      //   removedNode = next;
      //   console.log(next);
      //   curr.next = next.next;
      //   this.size--;
      //   console.log(this.head);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    console.log(this.head);
    console.log(removedNode.value);
    return removedNode.value;
    //     let loop = 0;

    //     let curr = this.head;
    //     while (loop < index - 1) {
    //         loop++;
    //         this.size--
    //       curr = curr.next;
    //     }
    //     this.head = curr;
    //     console.log(this.head);
    //     return this.head;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    } else if (value === this.head.value) {
      this.head = this.head.next;
      return value;
    } else {
      //     let prev = this.head;
      //     let loop = 0;
      //       while ( this.size - 1 > loop && prev.next.value !== value ) {
      //       prev = prev.next;
      //       loop++;
      //     }
      //     console.log(this.head);

      //     if (prev.next.value !== value) {
      //       return "not found";
      //     }

      //     let deleteNode = prev.next;
      //     prev.next = deleteNode.next;
      //     this.size--
      //     console.log(prev);
      //     console.log(deleteNode.value);
      //     console.log(this.head);
      //   }
      // }
      // return value;
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        console.log(this.head);
        return value;
      }
      return null;
    }
  }

  search(value) {
    //     if (this.isEmpty()) {
    //       return -1;
    //     } else {
    //       let curr = this.head;
    //       let index = 0;
    //         while ( curr.next && curr.value !== value ) {
    //             curr = curr.next;
    //             index++;
    //         }
    //       if (!curr.next) {
    //         return -1;
    //       }
    //       return index;
    //     }

    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reversedList() {
    let pre = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = pre;
      pre = curr;
      curr = next;
    }
    return (this.head = pre);
  }
}

const list = new LinkList();

list.prepend(23);
list.prepend(13);
list.prepend(33);
list.append(234);
list.insert(7);
console.log(list.print());
// console.log(list.removeFrom(4));
// console.log(list.removeValue(7));
console.log(list.isEmpty());
console.log(list.getSize());
console.log(list.head);
console.log(list.search(2222));
console.log(list.reversedList());
console.log(list.print());
