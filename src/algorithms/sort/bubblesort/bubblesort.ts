import { swap } from "algorithms/swap/swap";

export function bubblesort<T extends number>(
    arr: T[],
    lo: number = 0,
    hi: number = arr.length - 1
): T[] {
    for (let i = lo; i <= hi; i++) {
        for (let k = i; k <= hi; k++) {
            if (arr[i] > arr[k]) {
                swap(arr, i, k);
            }
        }
    }
    return arr;
}
