import { swap } from "algorithm/swap/swap";

export function reverse(arr: any[]) {
    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr, i, arr.length - i - 1);
    }
    return arr;
}
