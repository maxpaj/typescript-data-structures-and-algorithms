import { Queue } from "../queue/queue";
import { HashTable } from "../hashtable/hashtable";
import { KeyNumber } from "../utility/keys";

export class Graph {
    private matrix: number[][];

    constructor(numberOfVertices: number) {
        this.matrix = new Array(numberOfVertices).fill(new Array(numberOfVertices).fill(-1));
    }

    addEdge(v1: number, v2: number, edge = 0): void {
        this.matrix[v1][v2] = edge;
        this.matrix[v2][v1] = edge;
    }

    isReachable(v1: number, v2: number): boolean {
        const neighbours = new Queue<number>();
        const visited = new HashTable<KeyNumber, boolean>(this.matrix.length);
        neighbours.enqueue(v1);

        while (!neighbours.isEmpty()) {
            const vertex = neighbours.dequeue();

            // If found, return
            if (vertex === v2) {
                return true;
            }
            
            // Mark node as visited
            visited.set(new KeyNumber(vertex), true);

            // Add all neighbour vertices
            this.matrix[vertex].forEach((e, v) => {
                if (e !== -1 && !visited.get(new KeyNumber(v))) {
                    neighbours.enqueue(v);
                }
            });
        }

        return false;
    }
}