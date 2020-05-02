import { swap } from "../../swap/swap";

export function bubblesort(
    arr: number[],
    lo: number = 0,
    hi: number = arr.length - 1
) {
    for (let i = lo; i <= hi; i++) {
        for (let k = i; k <= hi; k++) {
            if (arr[i] > arr[k]) {
                swap(arr, i, k);
            }
        }
    }
    return arr;
}
