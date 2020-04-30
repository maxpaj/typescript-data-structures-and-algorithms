import { LinkedList } from "./linked_list";
import { expect } from "chai";

describe("LinkedList", () => {
    describe("addLast", () => {
        it("should add elements to the end of the list", () => {
            const list = new LinkedList<number>();

            [9, 10, 2, 3, -1].forEach(n => {
                list.insertLast(n);
            });

            expect(list.getFirst()).to.equal(9);
            expect(list.getSize()).to.equal(5);

            list.insertLast(1);

            expect(list.getFirst()).to.equal(9);
            expect(list.getSize()).to.equal(6);
        });
    });

    describe("remove", () => {
        it("should remove the element at the given index (default 0)", () => {
            const list = new LinkedList<number>();

            [9, 10, 2, 3, -1, 5].forEach(n => {
                list.insertLast(n);
            });

            const removed = list.removeFirst();
            expect(removed).to.equal(9);
        });
    });

    describe("peek", () => {
        it("should pick out the value at the given index", () => {
            const list = new LinkedList<number>();

            [9, 10, 2, 3, -1, 5].forEach(n => {
                list.insertLast(n);
            });

            const removed = list.removeAt(0);
            expect(removed).to.equal(9);
        });
    });

    describe("size", () => {
        it("should return the correct number of elements in the list", () => {
            const list = new LinkedList<number>();

            [9, 10, 2, 3, -1, 5].forEach(n => {
                list.insertLast(n);
            });

            expect(list.getSize()).to.equal(6);
        });
    });

    describe("isEmpty", () => {
        const list = new LinkedList<number>();
        expect(list.isEmpty()).to.equal(true);

        list.insertLast(1);

        expect(list.isEmpty()).to.equal(false);

        list.removeFirst();

        expect(list.isEmpty()).to.equal(true);
    });

    describe("iterator", () => {
        it("should iterate the list in correct order", () => {
            const list = new LinkedList<number>();

            [9, 10, 2, 3, -1, 5].forEach(n => {
                list.insertLast(n);
            });

            const result = [];
            for (const e of list) {
                result.push(e);
            }

            expect(result[0]).to.equal(9);
            expect(result[1]).to.equal(10);
            expect(result[2]).to.equal(2);
            expect(result[3]).to.equal(3);
        });
    });
});
