export class ListNode<T> {
    data: T;
    next: ListNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

/**
 * List data structure interface.
 */
export interface List<T> extends Iterable<T> {
    /**
     * Clear the list.
     */
    clear(): void;

    /**
     * Get the first item in the list.
     *
     * @return The first item in the list.
     */
    getFirst(): ListNode<T>;

    /**
     * Get the last item in the list.
     *
     * @return The last item in the list.
     */
    getLast(): ListNode<T>;

    /**
     * Get the size of the list.
     *
     * @return The size of the list.
     */
    getSize(): number;

    /**
     * Determine if the list is empty.
     *
     * @return True if the list is empty, false otherwise.
     */
    isEmpty(): boolean;

    /**
     * Get the list element at the specified index.
     *
     * @param index The index of the element to get.
     * @returns The element at the specified index.
     */
    getElementAt(index: number): T;

    /**
     * Remove the first item in the list.
     *
     * @returns The first item in the list.
     */
    removeFirst(): ListNode<T>;
}
