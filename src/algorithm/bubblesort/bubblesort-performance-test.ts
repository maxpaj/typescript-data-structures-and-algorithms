import { testArray } from "../../utility/performance";
import { ComparableNumber } from "../../utility/comparable";
import { bubbleSort } from "./bubblesort";

function test(arr: ComparableNumber[]): [number, number] {
    const start = process.hrtime();
    bubbleSort(arr);
    return process.hrtime(start);
}

testArray([1000, 2000, 4000, 8000, 16000, 32000], test);
