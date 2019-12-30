import { IComparable } from "../../utility/comparable";
import { arraySwap } from "../../utility/swap";

export function bubblebort<T extends IComparable<T>>(arr: T[]): T[] {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i; k < arr.length; k++) {
            if (arr[i].greaterThan(arr[k])) {
                arraySwap(arr, i, k);
            }
        }
    }
    return arr;
}
