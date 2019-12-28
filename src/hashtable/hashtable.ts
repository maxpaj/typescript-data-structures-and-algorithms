export class HashTable<T> {
    buckets: { key: string, value: T }[][];

    constructor(size: number) {
        this.buckets = new Array(size).fill([]);
    }

    set(key: string, value: T) {
        const bucket = this.getBucket(key);
        bucket.push({ key, value });
    }

    remove(key: string) {
        const bucket = this.getBucket(key);
        const index = bucket.findIndex(entry => entry.key === key);
        return bucket.splice(index);
    }

    get(key: string) {
        const bucket = this.getBucket(key);
        const found = bucket.find(entry => entry.key === key);
        return found ? found.value : null;
    }

    private getBucket(key: string) {
        const index = this.hashKey(key);
        return this.buckets[index];
    }

    private hashKey(key: string) {
        return key.split("").reduce((sum, current) => {
            return current.charCodeAt(0) + sum;
        }, 0) % this.buckets.length;
    }
}