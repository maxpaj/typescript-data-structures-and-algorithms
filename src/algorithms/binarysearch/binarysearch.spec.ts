import { binarysearch } from "./binarysearch";
import { expect } from "chai";

describe("binarysearch", () => {
    it("should return the index of the found element", () => {
        const arr = [1, 3, 4, 8, 10, 19, 55, 150, 200, 1882, 1889, 1890];
        expect(binarysearch(arr, 4)).to.equal(2);
        expect(binarysearch(arr, 200)).to.equal(8);
    });

    it("should return the highest index of a found element if there are duplicates of the found element", () => {
        const arr = [1, 4, 4, 8, 10, 19, 55, 200, 200, 1882, 1889, 1890];
        expect(binarysearch(arr, 4)).to.equal(2);
        expect(binarysearch(arr, 200)).to.equal(8);
    });
});
