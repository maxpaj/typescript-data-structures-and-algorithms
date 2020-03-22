import { expect } from "chai";
import { countingsort } from "./countingsort";

describe("countingsort", () => {
    const cases = [
        { arr: [1, 0, 3, 1, 3, 1], base: 4 },
        { arr: [3, 7, 6, 1, 2, 3, 9], base: 10 },
        { arr: [3, 7, 10, 1, 2, 3, 9, 3, 7, 10, 1, 2, 3, 9], base: 11 }
    ];

    cases.forEach(({ arr, base }) => {
        it("should sort an array correctly", () => {
            countingsort(arr, base);

            for (let i = 0; i < arr.length - 1; i++) {
                expect(arr[i]).to.be.lte(arr[i + 1]);
            }
        });
    });
});
