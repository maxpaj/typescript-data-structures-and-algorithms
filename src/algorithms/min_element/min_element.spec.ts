import { min_element } from "./min_element";
import { expect } from "chai";

describe("min_element", () => {
    it("should return the smallest element of an array", () => {
        const arr = [1, 2, -5, 5, 8, -2, -1, 10];
        expect(min_element(arr)).to.equal(-5);
    });
});
