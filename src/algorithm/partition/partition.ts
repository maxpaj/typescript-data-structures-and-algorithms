import { IComparable } from "utility/comparable";
import { swap } from "algorithm/swap/swap";

export function partition<T extends IComparable<T>>(
    arr: T[],
    predicate: (e: T) => boolean,
    lo: number,
    hi: number
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
