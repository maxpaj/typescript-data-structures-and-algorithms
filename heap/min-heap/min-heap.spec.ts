import { MinHeap } from "./min-heap"
import { ComparableNumber } from "../../utility/comparable";
import { expect } from "chai";

describe("MinHeap", () => {
    it("should extract the lowest value first", () => {
        const heap = new MinHeap<ComparableNumber>();
        heap.insert(new ComparableNumber(3));
        heap.insert(new ComparableNumber(-1));
        heap.insert(new ComparableNumber(1));
        heap.insert(new ComparableNumber(2));
        const n = heap.extract();
        expect(n.number).to.equal(-1);
    });
})