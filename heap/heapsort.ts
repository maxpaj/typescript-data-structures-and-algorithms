import { MinHeap } from "./min-heap";

export function heapsort(arr: number[]) {
  const heap = new MinHeap();

  // Build the heap
  arr.forEach(el => {
    heap.insert(el);
  });

  const sorted = [];

  // Extract the values from the top until the heap is empty
  while (!heap.isEmpty()) {
    sorted.push(heap.extract());
  }

  return sorted;
}
