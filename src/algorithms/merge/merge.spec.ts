import { expect } from "chai";
import { merge } from "./merge";

describe("merge", () => {
    it("should merge two ranges", () => {
        expect(merge([1, 2, 3], [4, 5, 6])).to.eql([1, 2, 3, 4, 5, 6]);
    });
});
