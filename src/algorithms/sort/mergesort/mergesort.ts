import { merge } from "../../merge/merge";

export function mergesort(arr: number[]) {
    if (arr.length <= 1) {
        return arr;
    }

    const index = Math.floor(arr.length / 2);
    const a1 = mergesort(arr.slice(0, index));
    const a2 = mergesort(arr.slice(index, arr.length));

    return merge(a1, a2);
}
