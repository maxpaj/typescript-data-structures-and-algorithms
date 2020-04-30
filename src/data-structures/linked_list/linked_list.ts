class ListNode<T> {
    data: T;
    next: ListNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

export class LinkedList<T> implements Iterable<T> {
    private node: ListNode<T>;
    private size: number = 0;

    clear() {
        this.node === null;
    }

    getFirst(): T {
        return this.node.data;
    }

    getLast(): ListNode<T> {
        let current = this.node;
        while (current.next !== undefined) {
            current = current.next;
        }
        return current;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty() {
        return this.node === undefined;
    }

    getElementAt(index = 0): T {
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
        return current.data;
    }

    removeAt(index: number): T {
        // Handle removing the first element
        if (index === 0) {
            const v = this.node.data;
            this.node = this.node.next;
            this.size--;
            return v;
        }

        // Find the element in the list which is previous to the element which is going to be removed
        const current = this.findNodeByIndex(this.node, index - 1);

        // Remove the element
        if (!current.next) {
            throw "Index out of bounds";
        }

        const value = current.next.data;
        current.next = current.next ? current.next.next : undefined;
        this.size--;
        return value;
    }

    insertLast(value: T) {
        this.insertAt(this.size - 1, value);
    }

    insertFirst(value: T) {
        const next = this.node;
        this.node = new ListNode(value);
        this.node.next = next;
        this.size++;
    }

    insertAt(index: number, value: T): void {
        const newNode = new ListNode<T>(value);

        // Check if head exists
        if (!this.node) {
            this.node = newNode;
            this.size++;
            return;
        }

        // Step to node
        let current = this.node;
        if (index > -1) {
            current = this.findNodeByIndex(current, index);
        } else {
            current = this.getLast();
        }

        // Insert the node
        const tmp = current.next;
        current.next = newNode;
        newNode.next = tmp;
        this.size++;
    }

    iterator(): Iterator<T> {
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

    [Symbol.iterator]() {
        return this.iterator();
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

    toString(): string {
        let current = this.node;
        let str = "";
        while (current !== undefined) {
            str += current.data + " ";
            current = current.next;
        }
        return str;
    }
}
