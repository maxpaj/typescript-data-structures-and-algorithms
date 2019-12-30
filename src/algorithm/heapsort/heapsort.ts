import { Comparable } from "../../utility/comparable";
import { arraySwap } from "../../utility/swap";

function siftDown<T extends Comparable<T>>(arr: T[], lo: number, hi: number): void {
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
            arraySwap(arr, root, swap);
            root = swap;
        }
    }
}

export function heapify<T extends Comparable<T>>(arr: T[], lo: number, hi: number): void {
    let start = Math.floor((hi - lo - 1) / 2) - 1;
    while (start >= lo) {
        siftDown(arr, start--, hi - lo - 1);
    }
}

export function heapsort<T extends Comparable<T>>(arr: T[], lo = 0, hi = arr.length - 1): void {
    heapify(arr, lo, hi);

    while (lo < hi) {
        arraySwap(arr, lo, hi--);
        siftDown(arr, lo, hi);
    }
}