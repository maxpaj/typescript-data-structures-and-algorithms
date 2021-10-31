import { List, ListNode } from "./list";

export class LinkedList<T> implements List<T> {
    private node: ListNode<T>;
    private size: number = 0;

    clear() {
        this.node === null;
    }

    getFirst() {
        return this.node;
    }

    getLast() {
        let current = this.node;
        while (current.next !== undefined) {
            current = current.next;
        }
        return current;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.node === undefined;
    }

    /**
     *
     * @param index
     */
    getElementAt(index = 0) {
        return this.findNodeByIndex(this.node, index).data;
    }

    /**
     * Remove the first element of the list
     */
    removeFirst() {
        const current = this.node;
        const next = this.node.next;
        this.node = next;
        this.size--;
        return current;
    }

    /**
     *
     * @param index
     */
    removeAt(index: number): T {
        if (index === 0) {
            const v = this.node.data;
            this.node = this.node.next;
            this.size--;
            return v;
        }

        const current = this.findNodeByIndex(this.node, index - 1);

        if (!current.next) {
            throw "Index out of bounds";
        }

        const value = current.next.data;
        current.next = current.next ? current.next.next : undefined;
        this.size--;
        return value;
    }

    /**
     *
     * @param value
     */
    insertLast(value: T) {
        this.insertAt(this.size - 1, value);
    }

    /**
     *
     */
    insertFirst(value: T) {
        const next = this.node;
        this.node = new ListNode(value);
        this.node.next = next;
        this.size++;
    }

    /**
     *
     * @param index
     * @param value
     */
    insertAt(index: number, value: T): void {
        const newNode = new ListNode<T>(value);

        if (!this.node) {
            this.node = newNode;
            this.size++;
            return;
        }

        let current = this.node;
        if (index > -1) {
            current = this.findNodeByIndex(current, index);
        } else {
            current = this.getLast();
        }

        const tmp = current.next;
        current.next = newNode;
        newNode.next = tmp;
        this.size++;
    }

    begin(): Iterator<T> {
        let current = this.node;
        return {
            next(): IteratorResult<T, boolean> {
                if (current) {
                    const data = current.data;
                    current = current.next;
                    return { value: data, done: false };
                }
                return { value: null, done: true };
            },
        };
    }

    toString(): string {
        let current = this.node;
        let str = "";
        while (current !== undefined) {
            str += current.data + " ";
            current = current.next;
        }
        return str;
    }

    private findNodeByIndex(head: ListNode<T>, index: number): ListNode<T> {
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

    [Symbol.iterator]() {
        return this.begin();
    }
}
