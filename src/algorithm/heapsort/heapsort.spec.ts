import { ComparableNumber } from "../../utility/comparable";
import { expect } from "chai";
import { heapsort, heapify } from "./heapsort";

describe("heapsort", () => {
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
            heapsort(arr);

            for (let i = 0; i < arr.length - 1; i++) {
                expect(arr[i].number).to.be.lte(arr[i + 1].number);
            }
        });
    });
});

describe("heapify", () => {
    it("should heapify an array", () => {
        const arr = [
            new ComparableNumber(4),
            new ComparableNumber(10),
            new ComparableNumber(3),
            new ComparableNumber(5),
            new ComparableNumber(1)
        ];
        heapify(arr, 0, arr.length - 1);
        expect(arr[0].number).to.equal(10);
        expect(arr[1].number).to.equal(5);
        expect(arr[2].number).to.equal(3);
        expect(arr[3].number).to.equal(4);
        expect(arr[4].number).to.equal(1);
    });
});
