import { Graph } from "./graph-array";
import { expect } from "chai";

describe("Graph", () => {
    describe("isReachable", () => {
        it("should return true if two nodes are reachable", () => {
            const g = new Graph(10);
            g.addEdge(0, 1);
            const reachable = g.isReachable(0, 1);
            expect(reachable).to.equal(true);
        });

        it("should return false if two nodes are not reachable", () => {
            return;
        })
    })
})