export class ListNode<T> {
    data: T;
    next: ListNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

export interface List<T> extends Iterable<T> {
    clear(): void;
    getFirst(): T;
    getLast(): T;
    getSize(): number;
    isEmpty(): boolean;
    getElementAt(index: number): T;
    removeFirst(): T;
}
