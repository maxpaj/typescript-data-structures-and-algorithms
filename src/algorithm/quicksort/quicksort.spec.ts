import { ComparableNumber } from "../../utility/comparable";
import { expect } from "chai";
import { quicksort } from "./quicksort";

describe("quicksort", () => {
    const arrays = [
        [new ComparableNumber(1)],
        [new ComparableNumber(1), new ComparableNumber(1)],
        [
            new ComparableNumber(1),
            new ComparableNumber(1),
            new ComparableNumber(1),
            new ComparableNumber(1)
        ],
        [
            new ComparableNumber(3),
            new ComparableNumber(7),
            new ComparableNumber(10),
            new ComparableNumber(-4),
            new ComparableNumber(2),
            new ComparableNumber(3),
            new ComparableNumber(9)
        ],
        [
            new ComparableNumber(3),
            new ComparableNumber(7),
            new ComparableNumber(10),
            new ComparableNumber(-4),
            new ComparableNumber(2),
            new ComparableNumber(3),
            new ComparableNumber(9),
            new ComparableNumber(3),
            new ComparableNumber(7),
            new ComparableNumber(10),
            new ComparableNumber(-4),
            new ComparableNumber(2),
            new ComparableNumber(3),
            new ComparableNumber(9)
        ]
    ];

    arrays.forEach(arr => {
        it("should sort an array correctly", () => {
            quicksort(arr);
            for (let i = 0; i < arr.length - 1; i++) {
                expect(arr[i].number).to.be.lte(arr[i + 1].number);
            }
        });
    });
});
