import { inner_product } from "./inner_product";
import { expect } from "chai";

describe("inner_product", () => {
    it("should combine and add together two arrays", () => {
        const a1 = [1, 2, 3, 4, 5];
        const a2 = [10, 20, 30, 40, 50];
        const result = inner_product(
            a1,
            a2,
            (n1, n2) => n1 * n2,
            (sum, prev) => sum + prev
        );
        expect(result).to.equal(10 + 40 + 90 + 160 + 250);
    });
});
