import { Queue } from "../queue/queue";
import { HashTable } from "../hashtable/hashtable";
import { KeyNumber } from "../utility/keys";

export class Graph<V> {
    private adjacencyMatrix: number[][];
    private vertices: V[];

    constructor(numberOfVertices: number) {
        this.vertices = new Array<V>();
        this.adjacencyMatrix = new Array(numberOfVertices).fill(new Array(numberOfVertices).fill(-1));
    }

    addVertex(data: V): void {
        this.vertices.push(data);
    }

    addEdge(v1: number, v2: number, edge = 0): void {
        if (this.vertices[v1] === undefined || this.vertices[v2] === undefined) {
            throw "Missing vertex";
        }

        this.adjacencyMatrix[v1][v2] = edge;
        this.adjacencyMatrix[v2][v1] = edge;
    }

    // Breadth first search
    isReachable(v1: number, v2: number): boolean {
        const neighbours = new Queue<number>();
        const visited = new HashTable<KeyNumber, boolean>(this.adjacencyMatrix.length);
        neighbours.enqueue(v1);

        while (!neighbours.isEmpty()) {
            const vertex = neighbours.dequeue();

            // If found, return
            if (vertex === v2) {
                return true;
            }

            // Add all neighbour vertices
            this.adjacencyMatrix[vertex].forEach((e, v) => {
                if (e !== -1 && !visited.get(new KeyNumber(v))) {
                    // Mark node as visited
                    visited.set(new KeyNumber(vertex), true);
                    neighbours.enqueue(v);
                }
            });
        }

        return false;
    }
}