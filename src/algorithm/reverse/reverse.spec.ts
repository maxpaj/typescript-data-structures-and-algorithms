import { expect } from "chai";
import { reverse } from "./reverse";

describe("reverse", () => {
    it("should reverse an array", () => {
        expect(reverse([1])).to.eql([1]);
        expect(reverse([1, 2, 3, 4])).to.eql([4, 3, 2, 1]);
        expect(reverse([1, 2, 3, 4, 5])).to.eql([5, 4, 3, 2, 1]);
    });

    it("should reverse an array given two indices", () => {
        expect(reverse([1], 0, 0)).to.eql([1]);
        expect(reverse([1, 2], 0, 1)).to.eql([2, 1]);
        expect(reverse([1, 2, 3, 4, 5], 1, 4)).to.eql([1, 5, 4, 3, 2]);
    });
});
