import { testArray } from "../../utility/performance";
import { ComparableNumber } from "../../utility/comparable";
import { mergeSort } from "./mergesort";

function test(arr: ComparableNumber[]): [number, number] {
    const start = process.hrtime();
    mergeSort(arr);
    return process.hrtime(start);
}

testArray([80000, 160000, 320000, 640000, 1280000], test);
