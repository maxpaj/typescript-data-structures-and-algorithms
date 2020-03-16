import { ComparableNumber } from "utility/comparable";
import { heapmake } from "./heapmake";
import { expect } from "chai";

describe("heapmake", () => {
    it("should heapify an array", () => {
        const arr = [
            new ComparableNumber(4),
            new ComparableNumber(10),
            new ComparableNumber(3),
            new ComparableNumber(5),
            new ComparableNumber(1),
        ];
        heapmake(arr, 0, arr.length - 1);
        expect(arr[0].number).to.equal(10);
        expect(arr[1].number).to.equal(5);
        expect(arr[2].number).to.equal(3);
        expect(arr[3].number).to.equal(4);
        expect(arr[4].number).to.equal(1);
    });
});
