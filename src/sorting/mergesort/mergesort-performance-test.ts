import { testArray } from "../../utility/performance";
import { ComparableNumber } from "../../utility/comparable";
import { mergeSort } from "./mergesort";

function test(arr: ComparableNumber[]) {
  const start = process.hrtime();
  mergeSort(arr);
  return process.hrtime(start);
}

testArray([
  10000,
  20000,
  40000,
  80000,
  100000
], test);
