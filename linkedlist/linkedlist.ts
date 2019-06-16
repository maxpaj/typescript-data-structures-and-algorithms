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

  private last() {
    let current = this.head;
    while (current.next !== undefined) {
      current = current.next;
    }
    return current;
  }

  remove(index?: number) {
    // Handle removing the first element
    if (index === 0) {
      const temp = this.head;
      this.head = this.head.next;
      return temp.data;
    }

    // Find the element in the list which is previous to the element which is going to be removed
    const current = this.findNodeByIndex(this.head, index - 1);

    // Remove the element
    const temp = current.next;
    current.next = current.next ? current.next.next : undefined;
    return temp.data;
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
