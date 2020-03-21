import { IComparable } from "../../utility/comparable";
import { merge } from "algorithm/merge/merge";

export function mergesort<T extends IComparable<T>>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const index = Math.floor(arr.length / 2);
    const a1 = mergesort(arr.slice(0, index));
    const a2 = mergesort(arr.slice(index, arr.length));

    return merge(a1, a2);
}
