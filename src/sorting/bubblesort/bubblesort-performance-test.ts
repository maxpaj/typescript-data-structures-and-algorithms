import { testArray } from "../../utility/performance";
import { ComparableNumber } from "../../utility/comparable";
import { bubbleSort } from "./bubblesort";

function test(arr: ComparableNumber[]) {
  const start = process.hrtime();
  bubbleSort(arr);
  return process.hrtime(start);
}

testArray([
  10000,
  20000,
  40000,
  80000
], test);
