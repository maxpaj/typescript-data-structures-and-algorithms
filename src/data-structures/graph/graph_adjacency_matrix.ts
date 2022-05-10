import { ListQueue } from "../queue/list-queue";
import { HashTable } from "../hashtable/hashtable";
import { KeyNumber } from "../../utility/keys";
import { Graph, Edge, Vertex } from "./graph";

/**
 * Graph data structure implemented using an adjacency matrix.
 */
export class GraphAdjacencyMatrix<V, E> implements Graph<V, E> {
    private adjacency_matrix: Edge<E>[][];
    private vertices: Vertex<V>[];

    constructor(number_of_vertices: number) {
        this.vertices = new Array<Vertex<V>>();
        this.adjacency_matrix = new Array(number_of_vertices);
        this.clear();
    }

    clear(): void {
        for (let i = 0; i < this.adjacency_matrix.length; i++) {
            this.adjacency_matrix[i] = new Array(
                this.adjacency_matrix.length
            ).fill(null);
        }
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

        const mapped = this.adjacency_matrix[index].map(
            (v, i) => v !== null && this.vertices[i]
        );

        return mapped.filter((e) => e);
    }

    containsVertex(v1: Vertex<V>): boolean {
        return this.vertices.some((v) => v1.label === v.label);
    }

    addVertex(v: Vertex<V>): void {
        this.vertices.push(v);
    }

    addEdge(v1: Vertex<V>, v2: Vertex<V>, edge: E): void {
        const index1 = this.vertices.findIndex((v) => v.label === v1.label);
        const index2 = this.vertices.findIndex((v) => v.label === v2.label);

        if (index1 === -1 || index2 === -1) {
            throw "Missing vertex";
        }

        const e: Edge<E> = {
            data: edge,
            label: index1,
        };

        this.adjacency_matrix[index1][index2] = e;
        this.adjacency_matrix[index2][index1] = e;
    }

    isReachable(v1: Vertex<V>, v2: Vertex<V>): boolean {
        const queue = new ListQueue<Vertex<V>>();
        const visited = new HashTable<KeyNumber, boolean>(
            this.adjacency_matrix.length
        );
        queue.enqueue(v1);

        while (!queue.isEmpty()) {
            const vertex = queue.dequeue();

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
