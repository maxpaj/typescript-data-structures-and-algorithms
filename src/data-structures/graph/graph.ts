/**
 * Graph data structure interface.
 */
export interface Graph<V, E> {
    /**
     * Add an edge to the graph between two vertices.
     *
     * @param v1 The first vertex.
     * @param v2 The second vertex.
     * @param edge The edge data.
     */
    addEdge(v1: Vertex<V>, v2: Vertex<V>, edge: E): void;

    /**
     * Add a vertex to the graph.
     *
     * @param v The vertex to add.
     */
    addVertex(vertex: Vertex<V>): void;

    /**
     * Clear the graph edges.
     */
    clear(): void;

    /**
     * Return the vertices of the graph.
     *
     * @returns The vertices of the graph.
     */
    getEdges(): E[];

    getVertices(): Vertex<V>[];

    /**
     * Determines if there is an edge between two vertices.
     *
     * @param v1 The first vertex.
     * @param v2 The second vertex.
     * @returns True if there is an edge between the two vertices, false otherwise.
     */
    containsEdge(v1: Vertex<V>, v2: Vertex<V>): boolean;

    /**
     * Determines if the graph contains a vertex.
     *
     * @param v The vertex to check.
     * @returns True if the graph contains the vertex, false otherwise.
     */
    containsVertex(v: Vertex<V>): boolean;

    /**
     * Determines if a vertex is reachable from another vertex.
     *
     * @param v1 The first vertex.
     * @param v2 The second vertex.
     * @returns True if the second vertex is reachable from the first vertex, false otherwise.
     */
    isReachable(v1: Vertex<V>, v2: Vertex<V>): boolean;
}

export type Vertex<V> = {
    label: number;
    data: V;
};

export type Edge<E> = {
    label: number;
    data: E;
};
