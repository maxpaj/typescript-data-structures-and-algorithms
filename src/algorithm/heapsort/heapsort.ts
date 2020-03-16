import { IComparable } from "../../utility/comparable";
import { swap } from "../swap/swap";

function siftDown<T extends IComparable<T>>(
    arr: T[],
    lo: number,
    hi: number
): void {
    let root = lo;

    while (root * 2 + 1 <= hi) {
        const child = root * 2 + 1;
        let swap = root;

        if (arr[swap].lesserThan(arr[child])) {
            swap = child;
        }

        if (child + 1 <= hi && arr[swap].lesserThan(arr[child + 1])) {
            swap = child + 1;
        }

        if (swap === root) {
            return;
        } else {
            swap(arr, root, swap);
            root = swap;
        }
    }
}

export function heapify<T extends IComparable<T>>(
    arr: T[],
    lo: number,
    hi: number
): void {
    let start = Math.floor((hi - lo - 1) / 2) - 1;
    while (start >= lo) {
        siftDown(arr, start--, hi - lo - 1);
    }
}

export function heapsort<T extends IComparable<T>>(
    arr: T[],
    lo = 0,
    hi = arr.length - 1
): void {
    heapify(arr, lo, hi);

    while (lo < hi) {
        swap(arr, lo, hi--);
        siftDown(arr, lo, hi);
    }
}
