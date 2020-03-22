import { expect } from "chai";
import { mergesort } from "./mergesort";

describe("mergesort", () => {
    const arrays = [
        [1],
        [1, 1],
        [1, 1, 1, 1],
        [3, 7, 10, -4, 2, 3, 9],
        [3, 7, 10, -4, 2, 3, 9, 3, 7, 10, -4, 2, 3, 9],
    ];

    arrays.forEach(arr => {
        it("should sort an array correctly", () => {
            const sorted = mergesort(arr);

            expect(sorted.length).to.equal(arr.length);

            for (let i = 0; i < sorted.length - 1; i++) {
                expect(sorted[i]).to.be.lte(sorted[i + 1]);
            }
        });
    });
});
