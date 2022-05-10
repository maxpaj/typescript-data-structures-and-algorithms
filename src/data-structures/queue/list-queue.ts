import { LinkedList } from "../list/linked_list";
import { Queue } from "./queue";

/**
 * Queue data structure implementation using linked list.
 */
export class ListQueue<T> implements Queue<T> {
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
        return this.list.getFirst().data;
    }

    enqueue(value: T): void {
        this.list.insertLast(value);
    }

    dequeue(): T {
        return this.list.removeAt(0);
    }
}
