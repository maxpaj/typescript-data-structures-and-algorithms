import { arraySwap } from "../../utility/swap";
import { Comparable } from "../../utility/comparable";

export function insertionsort<T extends Comparable<T>>(arr: T[]): void {
    let i = 1;
    while (i < arr.length) {
        let j = i;
        while (j > 0 && arr[j - 1].greaterThan(arr[j])) {
            arraySwap(arr, j, j - 1);
            j = j - 1;
        }
        i = i + 1;
    }
}