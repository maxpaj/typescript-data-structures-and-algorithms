import { bubblesort } from "./bubblesort";
import { testArray } from "../../../utility/performance";

function test(arr: number[]): [number, number] {
    const start = process.hrtime();
    bubblesort(arr);
    return process.hrtime(start);
}

testArray([1000, 2000, 4000, 8000, 16000, 32000], test);
