import { swap } from "./swap";
import { expect } from "chai";

describe("swap", () => {
    it("should swap two elements in a range", () => {
        const arr = [1, 2, 3, 4];
        swap(arr, 0, 3);
        expect(arr[0]).to.equal(4);
        expect(arr[1]).to.equal(2);
        expect(arr[2]).to.equal(3);
        expect(arr[3]).to.equal(1);
    });
});
