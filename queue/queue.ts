import { LinkedList } from "../linkedlist/linkedlist";

export class Queue<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList<T>();
  }

  enqueue(value: T) {
    this.list.add(value);
  }

  dequeue() {
    return this.list.remove(0);
  }
}
