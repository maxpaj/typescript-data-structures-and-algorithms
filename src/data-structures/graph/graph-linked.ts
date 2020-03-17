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

export class Graph<V, E> {
    private vertices: Vertex<V>[];
    private edges: Edge<E>[];

    constructor(vertices: Vertex<V>[], edges: Edge<E>[]) {
        this.vertices = vertices;
        this.edges = edges;
    }

    isReachable(): void {
        const queue = new Queue<Vertex<V>>();
        queue.enqueue(this.vertices[0]);
    }
}
