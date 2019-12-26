import { testArray } from "../../utility/performance";
import { ComparableNumber } from "../../utility/comparable";
import { bubbleSort } from "./bubblesort";

function test(arr: ComparableNumber[]) {
  const start = process.hrtime();
  bubbleSort(arr);
  return process.hrtime(start);
}

testArray([1000, 10000, 100000], test);
