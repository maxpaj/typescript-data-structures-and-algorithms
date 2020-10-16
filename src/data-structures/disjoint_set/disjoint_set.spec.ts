import { DisjointSet } from "./disjoint_set";
import { expect } from "chai";

describe("disjoint_set", () => {
    describe("find", () => {
        const set = new DisjointSet(10);
        set.union(0, 9);
        set.union(2, 9);
        set.union(3, 2);
        set.union(4, 5);
        set.union(5, 1);
        set.union(5, 6);
        set.union(6, 7);
        set.union(7, 8);

        expect(set.connected(0, 3)).to.equal(true);
        expect(set.connected(4, 3)).to.equal(false);
    });
});
