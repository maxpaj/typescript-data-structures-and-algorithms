export class MinHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  public insert(element: number) {
    // Add element last
    this.heap.push(element);
    let elementIndex = this.heap.length - 1;

    do {
      // Find the parent
      let parentIndex = elementIndex % 2 === 0 ? Math.floor((elementIndex - 1) / 2) : Math.floor(elementIndex / 2);

      // If parent is bigger than element, swap them
      if (this.heap[parentIndex] > element) {
        const tmp = this.heap[parentIndex];
        this.heap[parentIndex] = element;
        this.heap[elementIndex] = tmp;
      } else {
        // Else, we're done
        return;
      }

      // Set next parent
      elementIndex = parentIndex;
    } while (elementIndex > -1);
  }

  private heapify(currentIndex: number) {
    // Find children index
    const leftIndex = currentIndex * 2 + 1;
    const rightIndex = currentIndex * 2 + 2;

    let minIndex = currentIndex;

    // Check if they are in the right place compared to the parent
    if (this.heap.length > leftIndex && this.heap[leftIndex] < this.heap[minIndex]) {
      minIndex = leftIndex;
    }

    if (this.heap.length > rightIndex && this.heap[rightIndex] < this.heap[minIndex]) {
      minIndex = rightIndex;
    }

    // If we found a child with a smaller value, swap and recurse
    if (minIndex != currentIndex) {
      const tmp = this.heap[minIndex];
      this.heap[minIndex] = this.heap[currentIndex];
      this.heap[currentIndex] = tmp;
      currentIndex = minIndex;

      this.heapify(minIndex);
    }
  }

  public extract(): number {
    // Store head
    const remove = this.heap[0];

    // Put last element on top
    this.heap[0] = this.heap.splice(-1)[0];

    // Heapify
    this.heapify(0);

    return remove;
  }

  public toString(): string {
    return this.heap.join(", ");
  }
}
