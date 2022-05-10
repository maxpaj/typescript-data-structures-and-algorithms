export interface IKey<K> {
    equals(k: K): boolean;
    hashCode(): number;
}

/**
 * Hashtable data structure.
 */
export class HashTable<K extends IKey<K>, V> {
    private buckets: { key: K; value: V }[][];

    constructor(size: number) {
        this.buckets = new Array(size).fill([]);
    }

    /**
     * Determines if the given key is in the table.
     *
     * @param key The key to search for.
     * @returns True if the key is in the table, false otherwise.
     */
    hasKey(key: K) {
        const bucket = this.getBucket(key);
        return bucket.find((b) => b.key.equals(key)) !== undefined;
    }

    /**
     * Set the value of a key.
     *
     * @param key The key to set the value for.
     * @param value The value to set.
     * @returns The previous value of the key.
     */
    set(key: K, value: V): V {
        const bucket = this.getBucket(key);
        const foundIndex = bucket.findIndex((entry) => entry.key.equals(key));

        if (foundIndex === -1) {
            bucket.push({ key, value });
            return null;
        }

        const previous = bucket[foundIndex].value;
        bucket[foundIndex].value = value;
        return previous;
    }

    /**
     * Remove a key from the table.
     *
     * @param key The key to remove.
     * @returns The value of the key if it was removed, otherwise null.
     */
    remove(key: K): V {
        const bucket = this.getBucket(key);
        const index = bucket.findIndex((entry) => entry.key.equals(key));
        if (index === -1) {
            return null;
        }
        return bucket.splice(index)[0].value;
    }

    /**
     * Get the value of a key.
     *
     * @param key The key to get the value for.
     * @returns The value of the key if it exists, otherwise null.
     */
    get(key: K): V {
        const bucket = this.getBucket(key);
        const found = bucket.find((entry) => entry.key.equals(key));
        if (!found) {
            return null;
        }
        return found.value;
    }

    private getBucket(key: K): { key: K; value: V }[] {
        const index = this.hashKey(key);
        const bucket = this.buckets[index];
        if (!bucket) {
            throw "Key not populated";
        }
        return bucket;
    }

    private hashKey(key: K): number {
        return key.hashCode() % this.buckets.length;
    }
}
