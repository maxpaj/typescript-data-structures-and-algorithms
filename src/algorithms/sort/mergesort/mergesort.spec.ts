import { expect } from "chai";
import { mergesort } from "./mergesort";
import { is_sorted } from "../../is_sorted/is_sorted";

describe("mergesort", () => {
    const arrays = [
        [1],
        [1, 1],
        [1, 1, 1, 1],
        [3, 7, 10, -4, 2, 3, 9],
        [3, 7, 10, -4, 2, 3, 9, 3, 7, 10, -4, 2, 3, 9],
    ];

    arrays.forEach((arr) => {
        it("should sort an array correctly", () => {
            const sorted = mergesort(arr);
            expect(sorted.length).to.equal(arr.length);
            expect(is_sorted(sorted)).to.equal(true);
        });
    });
});
