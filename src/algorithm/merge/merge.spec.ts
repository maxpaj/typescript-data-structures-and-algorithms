import { expect } from "chai";
import { merge } from "./merge";
import { ComparableNumber } from "utility/comparable";

describe("merge", () => {
    it("should merge two ranges", () => {
        expect(
            merge(
                [
                    new ComparableNumber(1),
                    new ComparableNumber(2),
                    new ComparableNumber(3),
                ],
                [
                    new ComparableNumber(4),
                    new ComparableNumber(5),
                    new ComparableNumber(6),
                ]
            )
        ).to.eql([
            new ComparableNumber(1),
            new ComparableNumber(2),
            new ComparableNumber(3),
            new ComparableNumber(4),
            new ComparableNumber(5),
            new ComparableNumber(6),
        ]);
    });
});
