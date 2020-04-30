export interface Graph<V, E> {
    addEdge(v1: Vertex<V>, v2: Vertex<V>, edge: E): void;
    addVertex(vertex: Vertex<V>): void;
    clear(): void;
    getEdges(): E[];
    getVertices(): Vertex<V>[];
    containsEdge(v1: Vertex<V>, v2: Vertex<V>): boolean;
    containsVertex(v: Vertex<V>): boolean;
}

export type Vertex<V> = {
    label: number;
    data: V;
};

export type Edge<E> = {
    label: number;
    data: E;
};
