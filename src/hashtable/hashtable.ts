export interface Key<K> {
    equals(k: K): boolean;
    hashCode(): number;
}

export class HashTable<K extends Key<K>, T> {
    private buckets: { key: K, value: T }[][];

    constructor(size: number) {
        this.buckets = new Array(size).fill([]);
    }

    set(key: K, value: T) {
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

    remove(key: K) {
        const bucket = this.getBucket(key);
        const index = bucket.findIndex(entry => entry.key.equals(key));
        if (index === -1) {
            return null;
        }
        return bucket.splice(index)[0].value;
    }

    get(key: K) {
        const bucket = this.getBucket(key);
        const found = bucket.find(entry => entry.key.equals(key));
        return found ? found.value : null;
    }

    private getBucket(key: K) {
        const index = this.hashKey(key);
        return this.buckets[index];
    }

    private hashKey(key: K) {
        return key.hashCode() % this.buckets.length;
    }
}