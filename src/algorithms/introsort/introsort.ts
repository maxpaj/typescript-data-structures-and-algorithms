import { heapsort } from "../heapsort/heapsort";
import { partition } from "algorithms/partition/partition";

function sort<T extends number>(
    arr: T[],
    lo: number,
    hi: number,
    maxdepth: number
): T[] {
    const n = hi - lo;
    if (n <= 1) {
        return;
    } else if (maxdepth === 0) {
        heapsort(arr, lo, hi);
    } else {
        const p = partition(arr, e => e < arr[hi], lo, hi);
        sort(arr, 0, p, maxdepth - 1);
        sort(arr, p, n - 1, maxdepth - 1);
    }
}

export function introsort<T extends number>(arr: T[]): void {
    const maxdepth = Math.floor(Math.log(arr.length)) * 2;
    sort(arr, 0, arr.length - 1, maxdepth);
}
