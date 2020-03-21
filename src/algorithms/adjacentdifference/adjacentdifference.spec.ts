import { adjacentdifference } from "./adjacentdifference";
import { expect } from "chai";

describe("adjacentdifference", () => {
    it("should return an array where each element is the difference of the element positioned on the current index and element positioned on the previous index of the input array", () => {
        const arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        const expected_diff = [1, 0, 1, 1, 2, 3, 5, 8, 13, 21];

        const diff = adjacentdifference(arr);
        expect(diff).to.eql(expected_diff);
    });

    it("should support specifying only a subset of the array", () => {
        const arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        const expected_diff = [21, 13, 21];

        const diff = adjacentdifference(arr, arr.length - 3, arr.length - 1);
        expect(diff).to.eql(expected_diff);
    });

    it("should support other binary operators", () => {
        const arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        const expected_diff = [1, 1, 2, 6, 15, 40, 104, 273, 714, 1870];

        const diff = adjacentdifference(
            arr,
            0,
            arr.length - 1,
            (n1, n2) => n1 * n2
        );
        expect(diff).to.eql(expected_diff);
    });
});
