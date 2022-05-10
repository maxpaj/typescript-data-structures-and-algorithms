/**
 * Min heap data structure.
 */
export class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    /**
     * Determines if the heap is empty.
     *
     * @returns True if the heap is empty, false otherwise.
     */
    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    /**
     * Insert an element into the heap.
     *
     * @param e The element to insert.
     */
    insert(e: number): void {
        // Add element last
        this.heap.push(e);

        // Bubble up the element
        this.bubbleUp(this.heap.length - 1);
    }

    /**
     * Determine the current size of the heap.
     *
     * @returns The current size of the heap.
     */
    size(): number {
        return this.heap.length;
    }

    /**
     * Remove the top of the heap.
     *
     * @returns The top of the heap.
     */
    extract(): number {
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
        if (parentIndex > -1 && this.heap[parentIndex] > element) {
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
            this.heap[leftIndex] < this.heap[minIndex]
        ) {
            minIndex = leftIndex;
        }

        if (
            this.heap.length > rightIndex &&
            this.heap[rightIndex] < this.heap[minIndex]
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
}
