import { expect } from "chai";
import { shellsort } from "./shellsort";
import { is_sorted } from "../../is_sorted/is_sorted";

describe("shellsort", () => {
    const arrays = [
        [1],
        [1, 1],
        [1, 1, 1, 1],
        [3, 7, 10, -4, 2, 3, 9],
        [3, 7, 10, -4, 2, 3, 9, 3, 7, 10, -4, 2, 3, 9],
    ];

    arrays.forEach((arr) => {
        it("should sort an array correctly", () => {
            shellsort(arr);
            expect(is_sorted(arr)).to.equal(true);
        });
    });
});
