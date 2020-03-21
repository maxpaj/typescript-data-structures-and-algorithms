import { swap } from "algorithms/swap/swap";

export function reverse(arr: any[], lo = 0, hi = arr.length - 1) {
    for (let i = 0; i < (hi - lo) / 2; i++) {
        swap(arr, i + lo, hi - i);
    }
    return arr;
}
