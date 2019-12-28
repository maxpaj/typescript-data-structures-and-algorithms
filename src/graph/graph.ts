import { Queue } from "../queue/queue";

class Vertex<T> {
    private weight: T;

    constructor(weight: T) {
        this.weight = weight;
    }

    getWeight(): T {
        return this.weight;
    }
}

class Edge<T> {
    private weight: T;

    constructor(weight: T) {
        this.weight = weight;
    }

    getWeight(): T {
        return this.weight;
    }
}

export class Graph<T> {
    private vertices: Vertex<T>[];
    private edges: Edge<T>[];

    constructor(vertices: Vertex<T>[], edges: Edge<T>[]) {
        this.vertices = vertices;
        this.edges = edges;
    }

    depthFirst(): void {
        const queue = new Queue<Vertex<T>>();
        queue.enqueue(this.vertices[0]);
    }
}
