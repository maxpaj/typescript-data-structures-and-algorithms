import { ListStack } from "../stack/list_stack";

/**
 * Binary search tree data structure. A binary tree where each node to the left
 * of the parent node is less than the parent node and each node to the right
 * of the parent node is greater than the parent node.
 */
export class BinarySearchTree<K extends number, V> implements Iterable<V> {
    private leftChild: BinarySearchTree<K, V> = null;
    private rightChild: BinarySearchTree<K, V> = null;
    private key: K;
    public value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    /**
     * Insert a new node into the tree.
     *
     * @param key The key of the node to insert.
     * @param value The value of the node to insert.
     */
    insert(key: K, value: V): void {
        if (key < this.key) {
            if (this.leftChild === null) {
                this.leftChild = new BinarySearchTree<K, V>(key, value);
            } else {
                this.leftChild.insert(key, value);
            }
        } else if (key > this.key) {
            if (this.rightChild === null) {
                this.rightChild = new BinarySearchTree<K, V>(key, value);
            } else {
                this.rightChild.insert(key, value);
            }
        }
    }

    /**
     * Remove a node from the tree.
     *
     * @param key The key of the node to remove.
     */
    remove(key: K): void {
        if (this.leftChild !== null && key < this.key) {
            if (this.leftChild.key === key) {
                this.leftChild = null;
            } else {
                this.leftChild.remove(key);
            }
        } else if (this.rightChild !== null && key > this.key) {
            if (this.rightChild.key === key) {
                this.rightChild = null;
            } else {
                this.rightChild.remove(key);
            }
        }
    }

    /**
     * Search the tree for a node with the given key.
     *
     * @param key The key of the node to search for.
     */
    search(key: K): V {
        if (this.key === key) {
            return this.value;
        }

        if (this.key > key && this.leftChild) {
            return this.leftChild.search(key);
        } else if (this.key < key && this.rightChild) {
            return this.rightChild.search(key);
        }
        return null;
    }

    /**
     * In order traversal of the tree. For each node, apply function f to the node.
     *
     * @param f The function to apply to each node.
     */
    inorder(f: (node: BinarySearchTree<K, V>) => void): void {
        if (this.leftChild) {
            this.leftChild.inorder(f);
        }
        f(this);
        if (this.rightChild) {
            this.rightChild.inorder(f);
        }
    }

    toString(): string {
        return "" + this.key;
    }

    begin(): Iterator<V> {
        const stack = new ListStack<BinarySearchTree<K, V>>();
        let current = this as BinarySearchTree<K, V>;

        return {
            next(): IteratorResult<V, boolean> {
                while (current != null) {
                    stack.push(current);
                    current = current.leftChild;
                }

                if (!stack.isEmpty()) {
                    const next = stack.pop();
                    current = next.rightChild;
                    return { value: next.value, done: false };
                }

                return { value: null, done: true };
            },
        };
    }

    [Symbol.iterator](): Iterator<V> {
        return this.begin();
    }
}
