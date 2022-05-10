/**
 * Queue data structure interace.
 */
export interface Queue<T> {
    /**
     * Determine if the queue is empty.
     *
     * @returns True if the queue is empty, false otherwise.
     */
    isEmpty(): boolean;

    /**
     * Get the size of the queue.
     *
     * @returns The size of the queue.
     */
    size(): number;

    /**
     * Peek the first element of the queue.
     *
     * @returns The first element of the queue.
     */
    peek(): T;

    /**
     * Put an item in the queue, at the last position.
     *
     * @param e The item to put on the queue.
     */
    enqueue(e: T): void;

    /**
     * Removes the first element of the queue.
     *
     * @returns The first element of the queue.
     */
    dequeue(): T;
}
