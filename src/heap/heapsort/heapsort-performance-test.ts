import { Heapsort } from "./heapsort";
import { testArray } from "../../utility/performance";
import { ComparableNumber } from "../../utility/comparable";

function heapsortTest(arr: ComparableNumber[]) {
  const start = process.hrtime();
  Heapsort.sort(arr);
  return process.hrtime(start);
}

testArray([
  10000,
  100000, 
  1000000, 
  10000000,
  100000000,
], heapsortTest);
