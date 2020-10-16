import { expect } from "chai";
import { radixsort } from "./radixsort";
import { is_sorted } from "../../is_sorted/is_sorted";

xdescribe("radixsort", () => {
    const arrays = [
        [1],
        [1, 1],
        [1, 1, 1, 1],
        [3, 7, 10, -4, 2, 3, 9],
        [3, 7, 10, -4, 2, 3, 9, 3, 7, 10, -4, 2, 3, 9],
    ];

    arrays.forEach((arr) => {
        it("should sort an array correctly", () => {
            radixsort(arr);

            expect(arr.length).to.equal(arr.length);
            expect(is_sorted(arr)).to.equal(true);
        });
    });
});
