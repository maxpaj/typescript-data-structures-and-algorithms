import { ListStack } from "./list-stack";
import { expect } from "chai";

describe("Stack", () => {
    describe("pop", () => {
        it("should remove top-most element of the stack", () => {
            const s = new ListStack();
            s.push(1);
            s.push(2);
            s.push(3);

            expect(s.size()).to.equal(3);

            const pop = s.pop();
            expect(pop).to.equal(3);
            expect(s.size()).to.equal(2);
        });
    });

    describe("push", () => {
        it("should add an element to the top of the stack", () => {
            const s = new ListStack();
            s.push(12);
            s.push(23);
            s.push(34);

            expect(s.size()).to.equal(3);
            expect(s.peek()).to.equal(34);

            s.push(45);

            expect(s.size()).to.equal(4);
            expect(s.peek()).to.equal(45);
        });
    });
});
