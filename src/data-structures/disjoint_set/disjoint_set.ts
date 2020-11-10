/**
 *
 */
export class DisjointSet {
    private id: number[];
    private sizes: number[];
    private nsets: number;

    constructor(size: number) {
        this.id = new Array(size);

        for (let i = 0; i < this.id.length; i++) {
            this.id[i] = i;
        }

        this.sizes = new Array(size).fill(1);
        this.nsets = size;
    }

    /**
     * Determines if two nodes are in the same set
     * @param p
     * @param q
     */
    connected(p: number, q: number) {
        return this.find(p) === this.find(q);
    }

    /**
     * Merges the sets where p, respectively q, are present
     * @param p
     * @param q
     */
    union(p: number, q: number) {
        let i = this.find(p);
        let j = this.find(q);

        if (i === j) {
            return;
        }

        // Merge the smaller tree with the larger tree
        if (this.sizes[i] < this.sizes[j]) {
            this.id[i] = this.id[j];
            this.sizes[j] += this.sizes[i];
        } else {
            this.id[j] = this.id[i];
            this.sizes[i] += this.sizes[j];
        }

        this.nsets--;
    }

    /**
     * Find the set id associated with the node at position p
     * @param p
     */
    find(p: number) {
        while (this.id[p] !== p) {
            p = this.id[p];
        }
        return p;
    }

    count() {
        return this.nsets;
    }

    toString() {
        let str = "";
        for (let i = 0; i < this.nsets; i++) {
            let p = i;
            let steps = 0;
            while (this.id[p] !== p) {
                p = this.id[p];
                steps++;
            }
            str += new Array(steps).join("\t") + i + "\n";
        }
        return str;
    }
}
