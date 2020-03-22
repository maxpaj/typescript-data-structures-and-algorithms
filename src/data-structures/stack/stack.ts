import { LinkedList } from "../linked_list/linked_list";

export class Stack<T> {
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
        return this.list.get(this.list.size() - 1);
    }

    pop(): T {
        return this.list.remove(this.list.size() - 1);
    }

    push(value: T): void {
        this.list.add(value);
    }
}
