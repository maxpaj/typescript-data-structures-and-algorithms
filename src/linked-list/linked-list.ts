class Node<T> {
  data: T;
  next: Node<T>;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  private head: Node<T>;

  constructor() {}

  peek() {
    return this.head.data;
  }

  size() {
    let size = 1;
    let head = this.head;
    while (head.next) {
      size++;
      head = head.next;
    }
    return size;
  }

  get(index: number = 0) {
    return this.findNodeByIndex(this.head, index).data;
  }

  remove(index: number = 0) {
    // Handle removing the first element
    if (index === 0) {
      const v = this.head.data;
      this.head = this.head.next;
      return v;
    }

    // Find the element in the list which is previous to the element which is going to be removed
    const current = this.findNodeByIndex(this.head, index - 1);

    // Remove the element
    if (!current.next) {
      throw "Index out of bounds";
    }
    
    const value = current.next.data;
    current.next = current.next ? current.next.next : undefined;
    return value;
  }

  add(value: T, index: number = -1) {
    const newNode = new Node<T>(value);

    // Check if head exists
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Step to node
    let current = this.head;
    if (index > -1) {
      current = this.findNodeByIndex(current, index);
    } else {
      current = this.last();
    }

    // Insert the node
    const tmp = current.next;
    current.next = newNode;
    newNode.next = tmp;
  }
  
  private last() {
    let current = this.head;
    while (current.next !== undefined) {
      current = current.next;
    }
    return current;
  }

  private findNodeByIndex(head: Node<T>, index: number) {
    let current = head;
    while (index > 0) {
      index--;
      current = current.next;
      if (!current) {
        throw "Index out of bounds";
      }
    }
    return current;
  }

  toString() {
    let current = this.head;
    let str = "";
    while (current !== undefined) {
      str += current.data + " ";
      current = current.next;
    }
    return str;
  }
}
