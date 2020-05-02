import { heap_adjust } from "../heap_adjust/heap_adjust";

export function make_heap(arr: number[], lo: number, hi: number): void {
    let start = Math.floor((hi - lo - 1) / 2) - 1;
    while (start >= lo) {
        heap_adjust(arr, start--, hi - lo - 1);
    }
}
