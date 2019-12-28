import { Queue } from "queue/queue";
import { HashTable } from "hashtable/hashtable";
import { KeyNumber } from "utility/keys";

export class Graph {
    private matrix: number[][];

    constructor(numberOfVertices: number) {
        this.matrix = new Array(numberOfVertices).fill(new Array(numberOfVertices).fill(-1));
    }

    addEdge(v1: number, v2: number, weight = 0): void {
        this.matrix[v1][v2] = weight;
    }

    isReachable(v1: number, v2: number): boolean {
        const neighbours = new Queue<number>();
        const visited = new HashTable<KeyNumber, boolean>(this.matrix.length);
        neighbours.enqueue(v1);

        while (!neighbours.isEmpty()) {
            const vertex = neighbours.dequeue();

            if (vertex === v2) {
                return true;
            }
            
            // Mark node as visited
            visited.set(new KeyNumber(vertex), true);

            // Add all neighbours
            this.matrix[vertex].forEach(v => {
                if (!visited.get(new KeyNumber(v))) {
                    neighbours.enqueue(v);
                }
            });
        }

        return false;
    }
}