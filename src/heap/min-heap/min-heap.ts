import { IComparable } from "../../utility/comparable";

export class MinHeap<T extends IComparable<T>> {
    private heap: T[];

    constructor() {
        this.heap = [];
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    insert(element: T): void {
        // Add element last
        this.heap.push(element);

        // Bubble up the element
        this.bubbleUp(this.heap.length - 1);
    }

    size(): number {
        return this.heap.length;
    }

    extract(): T {
        // Store head
        const head = this.heap[0];

        // Remove last
        const last = this.heap.splice(-1)[0];

        // If empty, simply return the value
        if (this.heap.length === 0) {
            return head;
        }

        // Put last element on top
        this.heap[0] = last;

        // Bubble down the element
        this.bubbleDown(0);

        return head;
    }

    private bubbleUp(currentIndex: number): void {
        const element = this.heap[currentIndex];
        const parentIndex = Math.floor((currentIndex - 1) / 2);

        // If parent is bigger than element, swap them
        if (parentIndex > -1 && this.heap[parentIndex].greaterThan(element)) {
            const tmp = this.heap[parentIndex];
            this.heap[parentIndex] = element;
            this.heap[currentIndex] = tmp;

            this.bubbleUp(parentIndex);
        }
    }

    private bubbleDown(currentIndex: number): void {
        // Find children index
        const leftIndex = currentIndex * 2 + 1;
        const rightIndex = currentIndex * 2 + 2;

        let minIndex = currentIndex;

        // Check if children are in the right place compared to the parent
        if (
            this.heap.length > leftIndex &&
            this.heap[leftIndex].lesserThan(this.heap[minIndex])
        ) {
            minIndex = leftIndex;
        }

        if (
            this.heap.length > rightIndex &&
            this.heap[rightIndex].lesserThan(this.heap[minIndex])
        ) {
            minIndex = rightIndex;
        }

        // If found a child with a smaller value, swap and recurse
        if (minIndex != currentIndex) {
            const tmp = this.heap[minIndex];
            this.heap[minIndex] = this.heap[currentIndex];
            this.heap[currentIndex] = tmp;
            currentIndex = minIndex;

            this.bubbleDown(minIndex);
        }
    }

    toString(): string {
        return this.heap.join(", ");
    }
}
