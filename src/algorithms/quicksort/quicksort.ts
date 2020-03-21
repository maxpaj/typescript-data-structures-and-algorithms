import { partition } from "algorithms/partition/partition";

export function quicksort<T extends number>(
    arr: T[],
    lo = 0,
    hi = arr.length - 1
): void {
    if (lo < hi) {
        const p = partition(arr, e => e < arr[hi], lo, hi);
        quicksort(arr, lo, p - 1);
        quicksort(arr, p + 1, hi);
    }
}
