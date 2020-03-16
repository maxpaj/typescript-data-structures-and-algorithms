import { IComparable } from "../../utility/comparable";
import { swap } from "../swap/swap";
import { heapmake } from "algorithm/heapmake/heapmake";
import { heapadjust } from "algorithm/heapadjust/heapadjust";

export function heapsort<T extends IComparable<T>>(
    arr: T[],
    lo = 0,
    hi = arr.length - 1
): void {
    heapmake(arr, lo, hi);

    while (lo < hi) {
        swap(arr, lo, hi--);
        heapadjust(arr, lo, hi);
    }
}
