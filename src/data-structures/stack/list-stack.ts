import { LinkedList } from "../list/linked_list";
import { Stack } from "./stack";

export class ListStack<T> implements Stack<T> {
    private list: LinkedList<T>;

    constructor() {
        this.list = new LinkedList<T>();
    }

    isEmpty(): boolean {
        return this.list.getSize() === 0;
    }

    size(): number {
        return this.list.getSize();
    }

    peek(): T {
        return this.list.getFirst();
    }

    pop(): T {
        return this.list.removeFirst();
    }

    push(value: T): void {
        this.list.insertFirst(value);
    }
}
