class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    let newNode = new Node(value);
    console.log(newNode.value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this._insertNewNode(this.root, newNode);
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else if (root.value === value) {
      return true;
    } else if (root.value > value) {
      return this.search(root.left, value);
    } else return this.search(root.right, value);
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  min(root) {
    if (root) {
      if (!root.left) {
        return root.value;
      } else return this.min(root.left);
    }
  }

  max(root) {
    if (root) {
      if (!root.right) {
        return this.root.value;
      } else return this.max(root.right);
    }
  }
  _insertNewNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else this._insertNewNode(root.left, newNode);
    }
    if (root.value < newNode.value) {
      if (root.right === null) {
        root.right = newNode;
      } else this._insertNewNode(root.right, newNode);
    }
  }
  // deletion(value) {
  //   this.root = this.deleteNode(this.root, value);
  // }
  // deleteNode(root, value) {
  //   if (root === null) {
  //     return root;
  //   }
  //   if (root.value > value) {
  //     root.left = this.deleteNode(root.left, value);
  //   } else if (root.value < value) {
  //     root.right = this.deleteNode(root.right, value);
  //   } else {
  //     if (!root.left && !root.right) {
  //       return null;
  //     }
  //     if (!root.left) {
  //       return root.right;
  //     } else if (!root.right) {
  //       return root.left;
  //     }
  //     root.value = this.min(root.right);
  //     root.right = this.deleteNode(root.right, root.value);
  //   }
  //   return root;
  // }
  deletion(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.right && !root.left) {
        return null;
      } else if (!root.right) {
        return root.left;
      } else if (!root.left) {
        return root.right;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  levelOrder() {
    if (this.root) {
      let queue = [];
      queue.push(this.root);
      while (queue.length) {
        let curr = queue.shift();
        console.log(curr.value);
        if (curr.left) {
          queue.push(curr.left);
        }
        if (curr.right) {
          queue.push(curr.right);
        }
      }
    }
  }
}

let bs = new BinarySearchTree();
bs.insert(9);
bs.insert(5);
bs.insert(4);
bs.insert(3);
bs.insert(7);
bs.insert(6);
bs.insert(8);
bs.insert(12);
bs.insert(10);
bs.insert(11);
bs.insert(14);
bs.insert(13);
bs.insert(15);
bs.insert(16);

bs.levelOrder();
bs.deletion(113);
bs.deletion(9);
bs.deletion(7);
bs.deletion(15);
console.log(bs.search(bs.root, 3));
bs.preOrder(bs.root);
bs.inOrder(bs.root);
bs.postOrder(bs.root);
bs.levelOrder();
bs.min(bs.root);
bs.max(bs.root);
