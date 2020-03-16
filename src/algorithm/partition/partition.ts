import { IComparable } from "utility/comparable";
import { swap } from "algorithm/swap/swap";

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
