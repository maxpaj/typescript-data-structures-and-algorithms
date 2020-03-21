import { swap } from "../swap/swap";
import { heapmake } from "algorithms/heapmake/heapmake";
import { heapadjust } from "algorithms/heapadjust/heapadjust";

export function heapsort<T extends number>(
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
