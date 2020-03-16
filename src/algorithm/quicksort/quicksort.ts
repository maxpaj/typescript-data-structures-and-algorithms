import { IComparable } from "../../utility/comparable";
import { swap } from "../swap/swap";

export function partition<T extends IComparable<T>>(
    arr: T[],
    lo: number,
    hi: number
): number {
    const pivot = arr[hi];

    let index = lo;

    for (let j = lo; j <= hi; j++) {
        if (arr[j].lesserThan(pivot)) {
            swap(arr, index++, j);
        }
    }

    swap(arr, index, hi);

    return index;
}

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
