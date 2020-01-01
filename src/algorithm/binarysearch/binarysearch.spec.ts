import { binarysearch } from "./binarysearch";
import { ComparableNumber } from "../../utility/comparable";
import { expect } from "chai";

describe("binarysearch", () => {
    it("should return the index of the found element", () => {
        const arr = [
            new ComparableNumber(1),
            new ComparableNumber(4),
            new ComparableNumber(8),
            new ComparableNumber(10),
            new ComparableNumber(19),
            new ComparableNumber(55),
            new ComparableNumber(200),
            new ComparableNumber(1882),
            new ComparableNumber(1889),
            new ComparableNumber(1890)
        ];

        expect(binarysearch(arr, new ComparableNumber(4))).to.equal(1);
        expect(binarysearch(arr, new ComparableNumber(200))).to.equal(6);
    });
});
