import { expect } from "chai";
import { introsort } from "./introsort";

describe("introsort", () => {
    const arrays = [
        [1],
        [1, 1],
        [1, 1, 1, 1],
        [3, 7, 10, -4, 2, 3, 9],
        [3, 7, 10, -4, 2, 3, 9, 3, 7, 10, -4, 2, 3, 9],
    ];

    it("should sort an array correctly", () => {
        arrays.forEach(arr => {
            introsort(arr);

            for (let i = 0; i < arr.length - 1; i++) {
                expect(arr[i]).to.be.lte(arr[i + 1]);
            }
        });
    });
});
