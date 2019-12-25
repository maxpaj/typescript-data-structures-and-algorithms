import { Comparable } from "../utility/comparable";

export class BinarySearchTree<T extends Comparable<T>> {
  leftChild: BinarySearchTree<T> = null;
  rightChild: BinarySearchTree<T> = null;
  data: T;

  constructor(data: T) {
    this.data = data;
  }

  insert(node: BinarySearchTree<T>) {
    if (node.data.lesserThan(this.data)) {
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

  search(data: T) {
    if (this.data.equals(data)) {
      return this;
    }

    if (this.data.greaterThan(data) && this.leftChild) {
      return this.leftChild.search(data);
    } else if (this.data.lesserThan(data) && this.rightChild) {
      return this.rightChild.search(data);
    }
    return null;
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
