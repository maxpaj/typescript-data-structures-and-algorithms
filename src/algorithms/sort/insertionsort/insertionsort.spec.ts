import { expect } from "chai";
import { insertionsort } from "./insertionsort";
import { is_sorted } from "../../is_sorted/is_sorted";

describe("insertionsort", () => {
    const arrays = [
        [1],
        [1, 1],
        [1, 1, 1, 1],
        [3, 7, 10, -4, 2, 3, 9],
        [3, 7, 10, -4, 2, 3, 9, 3, 7, 10, -4, 2, 3, 9],
    ];

    arrays.forEach((arr) => {
        it("should sort an array correctly", () => {
            insertionsort(arr);
            expect(is_sorted(arr)).to.equal(true);
        });
    });
});
