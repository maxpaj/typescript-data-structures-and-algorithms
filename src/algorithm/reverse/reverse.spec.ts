import { expect } from "chai";
import { reverse } from "./reverse";

describe("reverse", () => {
    it("should reverse an array", () => {
        expect(reverse([1])).to.eql([1]);
        expect(reverse([1, 2, 3, 4])).to.eql([4, 3, 2, 1]);
        expect(reverse([1, 2, 3, 4, 5])).to.eql([5, 4, 3, 2, 1]);
    });
});
