import { zip } from "./zip";
import { expect } from "chai";

describe("zip", () => {
    it("should transform all elements of an array", () => {
        const arr1 = [1, 2, 3, 4];
        const arr2 = ["a", "b", "c", "d"];
        const zipped = zip(arr1, arr2);
        expect(zipped[0]).to.eql([1, "a"]);
        expect(zipped[1]).to.eql([2, "b"]);
        expect(zipped[2]).to.eql([3, "c"]);
        expect(zipped[3]).to.eql([4, "d"]);
    });
});
