import { Queue } from "./queue";
import { expect } from "chai";

describe("Queue", () => {
    describe("enqueue", () => {
        it("should add an element to the end of the queue", () => {
            const q = new Queue();
            q.enqueue(1);
            q.enqueue(2);
            q.enqueue(3);
            expect(q.size()).to.equal(3);
            expect(q.peek()).to.equal(1);
        });
    });

    describe("dequeue", () => {
        it("should remove the first element of the queue", () => {
            const q = new Queue();
            q.enqueue(1);
            q.enqueue(2);

            expect(q.size()).to.equal(2);
            expect(q.dequeue()).to.equal(1);
            expect(q.size()).to.equal(1);
            expect(q.peek()).to.equal(2);
        });
    });
});
