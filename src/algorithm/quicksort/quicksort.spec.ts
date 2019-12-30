import { ComparableNumber } from "../../utility/comparable";
import { expect } from "chai";
import { quicksort, partition } from "./quicksort";

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

describe("partition", () => {
    it("should partially sort the given interval of an array", () => {
        const arr = [
            new ComparableNumber(12),
            new ComparableNumber(9),
            new ComparableNumber(7),
            new ComparableNumber(15),
            new ComparableNumber(10)
        ];

        partition(arr, 0, arr.length - 1);

        expect(arr[0].number).to.equal(9);
        expect(arr[1].number).to.equal(7);
        expect(arr[2].number).to.equal(10);
        expect(arr[3].number).to.equal(15);
        expect(arr[4].number).to.equal(12);
    });
});
