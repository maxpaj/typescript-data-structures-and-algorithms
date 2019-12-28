import { Comparable } from "../utility/comparable";

export class BinarySearchTree<K extends Comparable<K>, V> {
  private leftChild: BinarySearchTree<K, V> = null;
  private rightChild: BinarySearchTree<K, V> = null;
  private key: K;
  public value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  insert(key: K, value: V) {
    if (key.lesserThan(this.key)) {
      if (this.leftChild === null) {
        this.leftChild = new BinarySearchTree<K, V>(key, value);
      } else {
        this.leftChild.insert(key, value);
      }
    } else if (key.greaterThan(this.key)) {
      if (this.rightChild === null) {
        this.rightChild = new BinarySearchTree<K, V>(key, value);
      } else {
        this.rightChild.insert(key, value);
      }
    }
  }

  remove(key: K) {
    if (this.leftChild !== null && key.lesserThan(this.key)) {
      if (this.leftChild.key.equals(key)) {
        this.leftChild = null;
      } else {
        this.leftChild.remove(key);
      }
    } else if (this.rightChild !== null && key.greaterThan(this.key)) {
      if (this.rightChild.key.equals(key)) {
        this.rightChild = null;
      } else {
        this.rightChild.remove(key);
      }
    }
  }

  search(key: K) {
    if (this.key.equals(key)) {
      return this.value;
    }

    if (this.key.greaterThan(key) && this.leftChild) {
      return this.leftChild.search(key);
    } else if (this.key.lesserThan(key) && this.rightChild) {
      return this.rightChild.search(key);
    }
    return null;
  }

  inorder(f: (node: BinarySearchTree<K, V>) => void) {
    if (this.leftChild) {
      this.leftChild.inorder(f);
    }
    f(this);
    if (this.rightChild) {
      this.rightChild.inorder(f);
    }
  }

  toString() {
    return "" + this.key;
  }
}
