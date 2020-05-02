import { make_heap } from "../../make_heap/make_heap";
import { swap } from "../../swap/swap";
import { heap_adjust } from "../../heap_adjust/heap_adjust";

export function heapsort(arr: number[], lo = 0, hi = arr.length - 1): void {
    make_heap(arr, lo, hi);

    while (lo < hi) {
        swap(arr, lo, hi--);
        heap_adjust(arr, lo, hi);
    }
}
