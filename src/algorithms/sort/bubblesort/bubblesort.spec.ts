import { expect } from "chai";
import { bubblesort } from "./bubblesort";
import { is_sorted } from "../../is_sorted/is_sorted";

describe("bubblesort", () => {
    const arrays = [
        [1],
        [1, 1],
        [1, 1, 1, 1],
        [3, 7, 10, -4, 2, 3, 9],
        [3, 7, 10, -4, 2, 3, 9, 3, 7, 10, -4, 2, 3, 9],
    ];

    it("should sort an array correctly", () => {
        arrays.forEach((unsorted) => {
            const arr = bubblesort(unsorted);
            expect(arr.length).to.equal(unsorted.length);
            expect(is_sorted(arr)).to.equal(true);
        });
    });

    it("should sort an array interval", () => {
        const arr = [6, 1, 4, 3, 2, 5];
        const sorted = bubblesort(arr, 3, arr.length - 1);
        expect(sorted[0]).to.equal(6);
        expect(sorted[1]).to.equal(1);
        expect(sorted[2]).to.equal(4);
        expect(sorted[3]).to.equal(2);
        expect(sorted[4]).to.equal(3);
        expect(sorted[5]).to.equal(5);
    });
});
