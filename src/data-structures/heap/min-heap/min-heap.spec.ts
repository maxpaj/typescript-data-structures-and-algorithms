import { MinHeap } from "./min-heap";
import { expect } from "chai";

describe("MinHeap", () => {
    describe("extract", () => {
        it("should extract the lowest value first", () => {
            const heap = new MinHeap<number>();
            heap.insert(3);
            heap.insert(-1);
            heap.insert(1);
            heap.insert(2);
            const n = heap.extract();
            expect(n).to.equal(-1);
        });
    });
});
