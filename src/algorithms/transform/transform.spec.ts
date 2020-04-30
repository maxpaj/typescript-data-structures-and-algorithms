import { transform } from "./transform";
import { expect } from "chai";

describe("transform", () => {
    it("should transform all elements of an array", () => {
        const arr = [1, 2, 3, 4];
        const transformed = transform(arr, (e) => e * 2);
        expect(transformed[0]).to.equal(2);
    });
});
