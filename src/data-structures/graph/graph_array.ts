import { Queue } from "../queue/queue";
import { HashTable } from "../hashtable/hashtable";
import { KeyNumber } from "../../utility/keys";
import { Graph, Edge, Vertex } from "./graph";

export class GraphArray<V, E> implements Graph<V, E> {
    private adjacency_matrix: Edge<E>[][];
    private vertices: Vertex<V>[];

    constructor(number_of_vertices: number) {
        this.vertices = new Array<Vertex<V>>();
        this.adjacency_matrix = new Array(number_of_vertices);
        for (let i = 0; i < this.adjacency_matrix.length; i++) {
            this.adjacency_matrix[i] = new Array(number_of_vertices).fill(null);
        }
    }

    clear(): void {
        throw new Error("Method not implemented.");
    }

    getEdges(): E[] {
        throw new Error("Method not implemented.");
    }

    getVertices(): Vertex<V>[] {
        return this.vertices;
    }

    containsEdge(v1: Vertex<V>, v2: Vertex<V>): boolean {
        const index1 = this.vertices.findIndex((v) => v.label === v1.label);
        const index2 = this.vertices.findIndex((v) => v.label === v2.label);
        return this.adjacency_matrix[index1][index2] !== null;
    }

    getNeighbors(v: Vertex<V>) {
        const index = this.vertices.findIndex((ve) => ve.label === v.label);

        // Map edges to vertices
        const mapped = this.adjacency_matrix[index].map(
            (v, i) => v !== null && this.vertices[i]
        );

        return mapped.filter((e) => e);
    }

    containsVertex(needle: Vertex<V>): boolean {
        return this.vertices.some((v) => v.label === needle.label);
    }

    addVertex(vertex: Vertex<V>): void {
        this.vertices.push(vertex);
    }

    addEdge(v1: Vertex<V>, v2: Vertex<V>, edgeData: E): void {
        const index1 = this.vertices.findIndex((v) => v.label === v1.label);
        const index2 = this.vertices.findIndex((v) => v.label === v2.label);
        if (index1 === -1 || index2 === -1) {
            throw "Missing vertex";
        }

        const edge: Edge<E> = {
            data: edgeData,
            label: index1,
        };

        this.adjacency_matrix[index1][index2] = edge;
        this.adjacency_matrix[index2][index1] = edge;
    }

    // Breadth first search
    isReachable(v1: Vertex<V>, v2: Vertex<V>): boolean {
        const queue = new Queue<Vertex<V>>();
        const visited = new HashTable<KeyNumber, boolean>(
            this.adjacency_matrix.length
        );
        queue.enqueue(v1);

        while (!queue.isEmpty()) {
            const vertex = queue.dequeue();

            // If found, return
            if (vertex.label === v2.label) {
                return true;
            }

            this.getNeighbors(vertex).forEach((v) => {
                if (!visited.hasKey(new KeyNumber(v.label))) {
                    queue.enqueue(v);
                    visited.set(new KeyNumber(v.label), true);
                }
            });
        }

        return false;
    }
}
