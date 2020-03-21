import { swap } from "../swap/swap";

export function insertionsort<T extends number>(arr: T[]): void {
    let i = 1;
    while (i < arr.length) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            swap(arr, j, j - 1);
            j = j - 1;
        }
        i = i + 1;
    }
}
