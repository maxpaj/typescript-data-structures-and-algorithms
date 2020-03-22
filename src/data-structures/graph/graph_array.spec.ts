import { Graph } from "./graph_array";
import { expect } from "chai";

describe("Graph", () => {
    describe("isReachable", () => {
        it("should return true if two nodes are reachable", () => {
            const g1 = new Graph<number>(3);
            g1.addVertex(0);
            g1.addVertex(0);
            g1.addVertex(0);
            g1.addVertex(0);
            g1.addVertex(0);

            g1.addEdge(0, 1);

            expect(g1.isReachable(0, 1)).to.equal(true);

            const g2 = new Graph<number>(10);
            g2.addVertex(0);
            g2.addVertex(0);
            g2.addVertex(0);
            g2.addVertex(0);
            g2.addVertex(0);
            g2.addVertex(0);

            g2.addEdge(0, 1);
            g2.addEdge(1, 2);
            g2.addEdge(2, 4);
            g2.addEdge(4, 5);
            g2.addEdge(3, 1);

            expect(g2.isReachable(0, 5)).to.equal(true);
        });

        it("should return false if two nodes are not reachable", () => {
            const g1 = new Graph<number>(3);
            g1.addVertex(0);
            g1.addVertex(0);

            g1.addEdge(0, 1);

            expect(g1.isReachable(0, 2)).to.equal(false);
            expect(g1.isReachable(0, 3)).to.equal(false);
        });
    });
});
