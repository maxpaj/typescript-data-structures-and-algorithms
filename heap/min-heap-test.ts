import { MinHeap } from "./min-heap";

const heap = new MinHeap();
heap.insert(3);
heap.insert(1);
heap.insert(-1);
heap.insert(2);
console.log(heap.toString());

const n = heap.extract();
console.log(n);

console.log(heap.toString());
