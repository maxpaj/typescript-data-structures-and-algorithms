import { Comparable } from "../../utility/comparable";
import { swap } from "../../utility/swap";

export function bubbleSort<T extends Comparable<T>>(arr: T[]): T[] {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i; k < arr.length; k++) {
            if (arr[i].greaterThan(arr[k])) {
                swap(arr, i, k);
            }
        }
    }
    return arr;
}
