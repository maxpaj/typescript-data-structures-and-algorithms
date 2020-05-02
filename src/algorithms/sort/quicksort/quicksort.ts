import { partition } from "../../partition/partition";

export function quicksort(arr: number[], lo = 0, hi = arr.length - 1) {
    if (lo < hi) {
        const p = partition(arr, (e) => e < arr[hi], lo, hi);
        quicksort(arr, lo, p - 1);
        quicksort(arr, p + 1, hi);
    }
}
