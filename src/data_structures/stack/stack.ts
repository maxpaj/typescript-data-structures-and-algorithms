/**
 * Stack data structure inteface.
 */
export interface Stack<T> {
    /**
     * Determine if the stack is empty.
     *
     * @returns True if the stack is empty, false otherwise.
     */
    isEmpty(): boolean;

    /**
     * Get the size of the stack.
     *
     * @returns The size of the stack.
     */
    size(): number;

    /**
     * Peek the first element of the stack.
     *
     * @returns The first element of the stack.
     */
    peek(): T;

    /**
     * Remove the first item on the stack.
     *
     * @returns The first item on the stack.
     */
    pop(): T;

    /**
     * Put an item on the top of the stack.
     *
     * @param e The item to put on the stack.
     */
    push(e: T): void;
}
