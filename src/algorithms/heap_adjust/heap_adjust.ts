import { swap } from "algorithms/swap/swap";

export function heapadjust<T extends number>(
    arr: T[],
    lo: number,
    hi: number
): void {
    let root = lo;

    while (root * 2 + 1 <= hi) {
        const child = root * 2 + 1;
        let swapIndex = root;

        if (arr[swapIndex] < arr[child]) {
            swapIndex = child;
        }

        if (child + 1 <= hi && arr[swapIndex] < arr[child + 1]) {
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
