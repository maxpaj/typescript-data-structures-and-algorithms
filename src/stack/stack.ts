import { LinkedList } from "../linked-list/linked-list";

export class Stack<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList<T>();
  }

  isEmpty() {
    return this.list.size() === 0;
  }

  size() {
    return this.list.size();
  }

  peek() {
    return this.list.get(this.list.size() - 1);
  }

  pop() {
    return this.list.remove(this.list.size() - 1);
  }

  push(value: T) {
    this.list.add(value);
  }
}
