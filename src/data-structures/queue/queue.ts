import { LinkedList } from "../linked_list/linked_list";

export class Queue<T> {
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

    enqueue(value: T): void {
        this.list.insertLast(value);
    }

    dequeue(): T {
        return this.list.removeAt(0);
    }
}
