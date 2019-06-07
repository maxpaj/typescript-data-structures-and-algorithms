export class MinHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  public isEmpty() {
    return this.heap.length === 0;
  }

  public insert(element: number) {
    // Add element last
    this.heap.push(element);

    // Grab the index
    let currentIndex = this.heap.length - 1;

    // Bubble up the element
    this.bubble_up(currentIndex);
  }

  public extract(): number {
    // Store head
    const head = this.heap[0];

    // Remove last
    const last = this.heap.splice(-1)[0];

    // If empty, simply return the value
    if (this.heap.length === 0) {
      return head;
    }

    // Put last element on top
    this.heap[0] = last;

    // Bubble down the element
    this.bubble_down(0);

    return head;
  }

  public toString(): string {
    return this.heap.join(", ");
  }

  private bubble_up(currentIndex: number) {
    const element = this.heap[currentIndex];

    // Find the parent
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    // If parent is bigger than element, swap them
    if (this.heap[parentIndex] > element) {
      const tmp = this.heap[parentIndex];
      this.heap[parentIndex] = element;
      this.heap[currentIndex] = tmp;

      this.bubble_up(parentIndex);
    }
  }

  private bubble_down(currentIndex: number) {
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

      this.bubble_down(minIndex);
    }
  }
}
