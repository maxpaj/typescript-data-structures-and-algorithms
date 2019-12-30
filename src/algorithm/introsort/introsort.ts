import { heapsort } from "../heapsort/heapsort";
import { Comparable } from "../../utility/comparable";

function partition<T>(arr: T[], lo: number, hi: number): number {
    return 0;
}

function sort<T extends Comparable<T>>(arr: T[], lo: number, hi: number, maxdepth: number): T[] {
    const n = arr.length;
    if (n <= 1) {
        return arr;
    } else if (maxdepth === 0) {
        heapsort(arr, lo, hi);
    } else {
        const p = partition(arr, lo, hi);
        sort(arr, 0, p - 1, maxdepth - 1);
        sort(arr, p + 1, n - 1, maxdepth - 1);
    }
}

export function introsort<T extends Comparable<T>>(arr: T[]): T[] {
    const maxdepth = Math.floor(Math.log(arr.length)) * 2;
    return sort(arr, 0, arr.length - 1, maxdepth);
}