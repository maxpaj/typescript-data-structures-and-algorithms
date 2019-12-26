import { MinHeap } from "../../heap/min-heap/min-heap";
import { Comparable } from "../../utility/comparable";

export function heapSort<T extends Comparable<T>>(arr: T[]) {
  const heap = new MinHeap<T>();

  // Build the heap
  arr.forEach(el => {
    heap.insert(el);
  });

  const sorted = Array<T>();

  // Extract the values from the top until the heap is empty
  while (!heap.isEmpty()) {
    sorted.push(heap.extract());
  }

  return sorted;
}