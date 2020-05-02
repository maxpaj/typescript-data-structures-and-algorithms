import { swap } from "../swap/swap";

export function partition(
    arr: number[],
    predicate: (e: number) => boolean,
    lo: number = 0,
    hi: number = arr.length - 1
): number {
    let index = lo;

    for (let j = lo; j <= hi; j++) {
        if (predicate(arr[j])) {
            swap(arr, index++, j);
        }
    }

    swap(arr, index, hi);

    return index;
}
