import { ComparableNumber } from "utility/comparable";
import { partition } from "./partition";
import { expect } from "chai";

describe("partition", () => {
    it("should partition the given interval of an array", () => {
        const arr = [
            new ComparableNumber(12),
            new ComparableNumber(9),
            new ComparableNumber(7),
            new ComparableNumber(15),
            new ComparableNumber(10),
        ];

        partition(
            arr,
            e => e.lesserThan(arr[arr.length - 1]),
            0,
            arr.length - 1
        );

        expect(arr[0].number).to.equal(9);
        expect(arr[1].number).to.equal(7);
        expect(arr[2].number).to.equal(10);
        expect(arr[3].number).to.equal(15);
        expect(arr[4].number).to.equal(12);
    });
});
