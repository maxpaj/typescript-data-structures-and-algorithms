import { IComparable } from "utility/comparable";
import { swap } from "algorithm/swap/swap";

export function heapadjust<T extends IComparable<T>>(
    arr: T[],
    lo: number,
    hi: number
): void {
    let root = lo;

    while (root * 2 + 1 <= hi) {
        const child = root * 2 + 1;
        let swapIndex = root;

        if (arr[swapIndex].lesserThan(arr[child])) {
            swapIndex = child;
        }

        if (child + 1 <= hi && arr[swapIndex].lesserThan(arr[child + 1])) {
            swapIndex = child + 1;
        }

        if (swapIndex === root) {
            return;
        } else {
            swap(arr, root, swapIndex);
            root = swapIndex;
        }
    }
}
