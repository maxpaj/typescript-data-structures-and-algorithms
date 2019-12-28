import { testArray } from "../../utility/performance";
import { ComparableNumber } from "../../utility/comparable";
import { heapSort } from "./heapsort";

function test(arr: ComparableNumber[]): [number, number] {
    const start = process.hrtime();
    heapSort(arr);
    return process.hrtime(start);
}

testArray([80000, 160000, 320000, 640000, 1280000, 2560000], test);
