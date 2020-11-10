import { GraphAdjacencyMatrix } from "./graph_adjacency_matrix";
import { expect } from "chai";

describe("GraphAdjacencyMatrix", () => {
    describe("addVertex", () => {
        it("should add a vertex to the graph", () => {
            const g = new GraphAdjacencyMatrix<string, number>(3);
            g.addVertex({ data: "A", label: 0 });
            expect(g.containsVertex({ data: "A", label: 0 })).to.equal(true);
            expect(g.containsVertex({ data: "B", label: 1 })).to.equal(false);
        });
    });

    describe("addEdge", () => {
        it("should add an edge to the graph", () => {
            const g = new GraphAdjacencyMatrix<string, number>(3);
            const vertices = [
                {
                    data: "A",
                    label: 0,
                },
                {
                    data: "B",
                    label: 1,
                },
                {
                    data: "C",
                    label: 2,
                },
            ];

            g.addVertex(vertices[0]);
            g.addVertex(vertices[1]);
            g.addVertex(vertices[2]);

            g.addEdge(vertices[0], vertices[1], 0);

            expect(g.containsEdge(vertices[0], vertices[1])).to.equal(true);
            expect(g.containsEdge(vertices[1], vertices[0])).to.equal(true);
            expect(g.containsEdge(vertices[0], vertices[2])).to.equal(false);
        });
    });

    describe("getNeighbors", () => {
        const g = new GraphAdjacencyMatrix<string, number>(3);
        const vertices = [
            {
                data: "A",
                label: 0,
            },
            {
                data: "B",
                label: 1,
            },
            {
                data: "C",
                label: 2,
            },
        ];

        g.addVertex(vertices[0]);
        g.addVertex(vertices[1]);
        g.addVertex(vertices[2]);

        g.addEdge(vertices[0], vertices[1], 0);

        const neighbors = g.getNeighbors(vertices[0]);
        expect(neighbors[0].data).to.equal("B");
    });

    describe("isReachable", () => {
        it("should return true if two nodes are reachable", () => {
            const g1 = new GraphAdjacencyMatrix<string, number>(3);
            const vertices = [
                { data: "A", label: 0 },
                { data: "B", label: 1 },
                { data: "C", label: 2 },
                { data: "D", label: 3 },
                { data: "E", label: 4 },
                { data: "F", label: 5 },
                { data: "G", label: 6 },
            ];

            vertices.forEach((v) => {
                g1.addVertex(v);
            });

            g1.addEdge(vertices[0], vertices[1], 1);

            expect(g1.isReachable(vertices[0], vertices[1])).to.equal(true);

            const g2 = new GraphAdjacencyMatrix<string, number>(10);

            vertices.forEach((v) => {
                g2.addVertex(v);
            });

            g2.addEdge(vertices[0], vertices[1], 1);
            g2.addEdge(vertices[1], vertices[2], 1);
            g2.addEdge(vertices[2], vertices[4], 1);
            g2.addEdge(vertices[4], vertices[5], 1);
            g2.addEdge(vertices[3], vertices[1], 1);

            expect(g2.isReachable(vertices[0], vertices[5])).to.equal(true);
        });

        it("should return false if two nodes are not reachable", () => {
            const g1 = new GraphAdjacencyMatrix<number, number>(3);

            const vertices = [
                { data: 0, label: 0 },
                { data: 0, label: 1 },
                { data: 0, label: 2 },
                { data: 0, label: 3 },
            ];

            vertices.forEach((v) => {
                g1.addVertex(v);
            });

            g1.addEdge(vertices[0], vertices[1], 1);

            expect(g1.isReachable(vertices[0], vertices[2])).to.equal(false);
            expect(g1.isReachable(vertices[0], vertices[3])).to.equal(false);
        });
    });
});
