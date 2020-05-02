import { heapsort } from "../heapsort/heapsort";
import { partition } from "../../partition/partition";

export function introsort(
    arr: number[],
    lo: number = 0,
    hi: number = arr.length - 1,
    maxdepth = Math.floor(Math.log(hi - lo)) * 2
) {
    const n = hi - lo;

    if (n <= 1) {
        return;
    } else if (maxdepth === 0) {
        heapsort(arr, lo, hi);
    } else {
        const p = partition(arr, (e) => e < arr[hi], lo, hi);
        introsort(arr, 0, p, maxdepth - 1);
        introsort(arr, p, n - 1, maxdepth - 1);
    }
}
