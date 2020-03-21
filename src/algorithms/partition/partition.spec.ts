import { partition } from "./partition";
import { expect } from "chai";

describe("partition", () => {
    it("should partition the given interval of an array and return the pivot index", () => {
        const arr = [12, 9, 7, 15, 10];

        const index = partition(
            arr,
            e => e < arr[arr.length - 1],
            0,
            arr.length - 1
        );

        expect(arr[0]).to.equal(9);
        expect(arr[1]).to.equal(7);
        expect(arr[2]).to.equal(10);
        expect(arr[3]).to.equal(15);
        expect(arr[4]).to.equal(12);

        expect(index).to.equal(2);
    });
});
