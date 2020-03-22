import { make_heap } from "algorithms/make_heap/make_heap";
import { heapadjust } from "algorithms/heap_adjust/heap_adjust";
import { swap } from "algorithms/swap/swap";

export function heapsort<T extends number>(
    arr: T[],
    lo = 0,
    hi = arr.length - 1
): void {
    make_heap(arr, lo, hi);

    while (lo < hi) {
        swap(arr, lo, hi--);
        heapadjust(arr, lo, hi);
    }
}
