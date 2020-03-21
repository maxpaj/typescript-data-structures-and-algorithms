import { expect } from "chai";
import { quicksort } from "./quicksort";

describe("quicksort", () => {
    const arrays = [
        [1],
        [1, 1],
        [1, 1, 1, 1],
        [3, 7, 10, -4, 2, 3, 9],
        [3, 7, 10, -4, 2, 3, 9, 3, 7, 10, -4, 2, 3, 9],
    ];

    arrays.forEach(arr => {
        it("should sort an array correctly", () => {
            quicksort(arr);
            for (let i = 0; i < arr.length - 1; i++) {
                expect(arr[i]).to.be.lte(arr[i + 1]);
            }
        });
    });
});
