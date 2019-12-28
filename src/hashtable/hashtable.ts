export interface Key<K> {
    equals(k: K): boolean;
    hashCode(): number;
}

export class HashTable<K extends Key<K>, V> {
    private buckets: { key: K; value: V }[][];

    constructor(size: number) {
        this.buckets = new Array(size).fill([]);
    }

    set(key: K, value: V): V {
        const bucket = this.getBucket(key);
        const foundIndex = bucket.findIndex(entry => entry.key.equals(key));

        if (foundIndex === -1) {
            bucket.push({ key, value });
            return null;
        } else {
            const previous = bucket[foundIndex].value;
            bucket[foundIndex].value = value;
            return previous;
        }
    }

    remove(key: K): V {
        const bucket = this.getBucket(key);
        const index = bucket.findIndex(entry => entry.key.equals(key));
        if (index === -1) {
            return null;
        }
        return bucket.splice(index)[0].value;
    }

    get(key: K): V {
        const bucket = this.getBucket(key);
        const found = bucket.find(entry => entry.key.equals(key));
        if (found === null) {
            return null;
        }
        return found.value;
    }

    private getBucket(key: K): { key: K, value: V }[] {
        const index = this.hashKey(key);
        return this.buckets[index];
    }

    private hashKey(key: K): number {
        return key.hashCode() % this.buckets.length;
    }
}
