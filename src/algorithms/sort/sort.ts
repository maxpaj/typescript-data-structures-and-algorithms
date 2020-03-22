import { introsort } from "./introsort/introsort";

export function sort(arr: [], lo: number = 0, hi: number = arr.length - 1) {
    return introsort(arr, lo, hi);
}
