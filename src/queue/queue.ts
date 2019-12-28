import { LinkedList } from "../linked-list/linked-list";

export class Queue<T> {
    private list: LinkedList<T>;

    constructor() {
        this.list = new LinkedList<T>();
    }

    isEmpty(): boolean {
        return this.list.size() === 0;
    }

    size(): number {
        return this.list.size();
    }

    peek(): T {
        return this.list.peek();
    }

    enqueue(value: T): void {
        this.list.add(value);
    }

    dequeue(): T {
        return this.list.remove(0);
    }
}
