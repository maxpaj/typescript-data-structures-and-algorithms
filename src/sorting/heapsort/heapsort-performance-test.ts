import { testArray } from "../../utility/performance";
import { ComparableNumber } from "../../utility/comparable";
import { heapSort } from "./heapsort";

function test(arr: ComparableNumber[]) {
  const start = process.hrtime();
  heapSort(arr);
  return process.hrtime(start);
}

testArray([
  10000,
  100000, 
  1000000,
  10000000
], test);
