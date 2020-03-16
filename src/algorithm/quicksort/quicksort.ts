import { IComparable } from "../../utility/comparable";
import { partition } from "algorithm/partition/partition";

export function quicksort<T extends IComparable<T>>(
    arr: T[],
    lo = 0,
    hi = arr.length - 1
): void {
    if (lo < hi) {
        const p = partition(arr, lo, hi);
        quicksort(arr, lo, p - 1);
        quicksort(arr, p + 1, hi);
    }
}
