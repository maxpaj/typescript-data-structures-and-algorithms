import { binary_search } from "./binary_search";
import { expect } from "chai";

describe("binary_search", () => {
    it("should return the index of the found element", () => {
        const arr = [1, 3, 4, 8, 10, 19, 55, 150, 200, 1882, 1889, 1890];
        expect(binary_search(arr, 4)).to.equal(2);
        expect(binary_search(arr, 200)).to.equal(8);
    });

    it("should return the highest index of a found element if there are duplicates of the found element", () => {
        const arr = [1, 4, 4, 8, 10, 19, 55, 200, 200, 1882, 1889, 1890];
        expect(binary_search(arr, 4)).to.equal(2);
        expect(binary_search(arr, 200)).to.equal(8);
    });
});
