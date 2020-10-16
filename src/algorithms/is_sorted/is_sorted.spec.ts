import { expect } from "chai";
import { is_sorted } from "./is_sorted";

describe("is_sorted", () => {
    describe("it should determine whether an array is sorted", () => {
        expect(is_sorted([])).to.equal(true);
        expect(is_sorted([1])).to.equal(true);
        expect(is_sorted([1, 1])).to.equal(true);
        expect(is_sorted([1, 2, 3])).to.equal(true);
        expect(is_sorted([-10, -5, 3, 5, 8])).to.equal(true);
        expect(is_sorted([2, 3, 0, -1, 2])).to.equal(false);
    });
});
