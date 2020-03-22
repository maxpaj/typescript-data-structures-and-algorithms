import { make_heap } from "./make_heap";
import { expect } from "chai";

describe("make_heap", () => {
    it("should heapify an array", () => {
        const arr = [4, 10, 3, 5, 1];
        make_heap(arr, 0, arr.length - 1);
        expect(arr[0]).to.equal(10);
        expect(arr[1]).to.equal(5);
        expect(arr[2]).to.equal(3);
        expect(arr[3]).to.equal(4);
        expect(arr[4]).to.equal(1);
    });
});
