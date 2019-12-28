import { LinkedList } from "./linked-list";
import { expect } from "chai";

describe("LinkedList", () => {
    describe("add", () => {
        it("should add elements to the end of the list", () => {
            const list = new LinkedList<number>();

            [9, 10, 2, 3, -1].forEach(n => {
                list.add(n);
            });

            expect(list.peek()).to.equal(9);
            expect(list.size()).to.equal(5);

            list.add(1);

            expect(list.peek()).to.equal(9);
            expect(list.size()).to.equal(6);
        });
    });

    describe("remove", () => {
        it("should remove the element at the given index (default 0)", () => {
            const list = new LinkedList<number>();

            [9, 10, 2, 3, -1, 5].forEach(n => {
                list.add(n);
            });

            const removed = list.remove();
            expect(removed).to.equal(9);
        });
    });

    describe("peek", () => {
        it("should pick out the value at the given index", () => {
            const list = new LinkedList<number>();

            [9, 10, 2, 3, -1, 5].forEach(n => {
                list.add(n);
            });

            const removed = list.remove(0);
            expect(removed).to.equal(9);
        });
    });

    describe("size", () => {
        it("should return the correct number of elements in the list", () => {
            const list = new LinkedList<number>();

            [9, 10, 2, 3, -1, 5].forEach(n => {
                list.add(n);
            });

            expect(list.size()).to.equal(6);
        });
    });
});
