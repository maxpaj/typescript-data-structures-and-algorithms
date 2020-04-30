import { heap_adjust } from "algorithms/heap_adjust/heap_adjust";

export function make_heap<T extends number>(
    arr: T[],
    lo: number,
    hi: number
): void {
    let start = Math.floor((hi - lo - 1) / 2) - 1;
    while (start >= lo) {
        heap_adjust(arr, start--, hi - lo - 1);
    }
}
