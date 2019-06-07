export class BinarySearchTree {
  leftChild: BinarySearchTree = null;
  rightChild: BinarySearchTree = null;
  data: number;

  constructor(data: number) {
    this.data = data;
  }

  insert(node: BinarySearchTree) {
    if (node.data < this.data) {
      if (this.leftChild === null) {
        this.leftChild = node;
      } else {
        this.leftChild.insert(node);
      }
    } else {
      if (this.rightChild === null) {
        this.rightChild = node;
      } else {
        this.rightChild.insert(node);
      }
    }
  }

  search(data: number) {
    if (this.data === data) {
      return this;
    }

    let found: BinarySearchTree = null;
    if (this.leftChild) {
      found = this.leftChild.search(data);
    }
    if (this.rightChild) {
      found = this.rightChild.search(data);
    }
    return found;
  }

  inorder() {
    if (this.leftChild) {
      this.leftChild.inorder();
    }
    if (this.rightChild) {
      this.rightChild.inorder();
    }
  }

  toString() {
    return "" + this.data;
  }
}
