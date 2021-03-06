import { expect } from "chai";
import { introsort } from "./introsort";
import { is_sorted } from "../../is_sorted/is_sorted";

xdescribe("introsort", () => {
    const arrays = [
        [1],
        [1, 1],
        [1, 1, 1, 1],
        [3, 7, 10, -4, 2, 3, 9],
        [3, 7, 10, -4, 2, 3, 9, 3, 7, 10, -4, 2, 3, 9],
    ];

    it("should sort an array correctly", () => {
        arrays.forEach((arr) => {
            introsort(arr);
            expect(is_sorted(arr)).to.equal(true);
        });
    });
});
