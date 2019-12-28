import { Comparable } from "utility/comparable";
import { swap } from "../../utility/swap";

function partition<T extends Comparable<T>>(arr: T[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let index = 0;

    for (let j = lo; j <= hi; j++) {
        if (arr[j].lesserThan(pivot)) {
            swap(arr, index++, j);
        }
    }

    swap(arr, index, hi);

    return index;
}

export function quickSort<T extends Comparable<T>>(arr: T[], lo = 0, hi = arr.length - 1): T[] {
    if (lo < hi) {
        const p = partition(arr, lo, hi);
        quickSort(arr, lo, p - 1);
        quickSort(arr, p + 1, hi);
    }
    return arr;
}