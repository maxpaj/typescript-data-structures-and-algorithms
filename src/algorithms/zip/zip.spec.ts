import { zip } from "./zip";
import { expect } from "chai";

describe("zip", () => {
    it("should zip together elements of two arrays into a single array", () => {
        const arr1 = [1, 2, 3, 4];
        const arr2 = ["a", "b", "c", "d"];
        const zipped = zip(arr1, arr2);
        expect(zipped[0]).to.eql([1, "a"]);
        expect(zipped[1]).to.eql([2, "b"]);
        expect(zipped[2]).to.eql([3, "c"]);
        expect(zipped[3]).to.eql([4, "d"]);
    });

    it("should work with different sizes of arrays and fill the remaining values with undefined", () => {
        const arr1 = [1, 2, 3, 4];
        const arr2 = ["a", "b", "c"];
        const zipped = zip(arr1, arr2);
        expect(zipped[0]).to.eql([1, "a"]);
        expect(zipped[1]).to.eql([2, "b"]);
        expect(zipped[2]).to.eql([3, "c"]);
        expect(zipped[3]).to.eql([4, undefined]);
    });
});
