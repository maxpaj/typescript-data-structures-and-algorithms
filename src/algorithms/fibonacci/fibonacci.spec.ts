import { expect } from "chai";
import { fib_memo } from "./fibonacci";

describe("fibonacci", () => {
    it("should correctly calculate the fibonacci sequence, starting from n", () => {
        expect(fib_memo(1)).to.equal(1);
        expect(fib_memo(0)).to.equal(1);
        expect(fib_memo(2)).to.equal(2);
        expect(fib_memo(3)).to.equal(3);
        expect(fib_memo(4)).to.equal(5);
        expect(fib_memo(5)).to.equal(8);
    });
});
