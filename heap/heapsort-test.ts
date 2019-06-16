import { heapsort } from "./heapsort";
import { testArray } from "../utility/test";

function heapsortTest(arr: number[]) {
  const start = process.hrtime();
  heapsort(arr);
  return process.hrtime(start)[1];
}

testArray([100000, 1000000, 10000000, 100000000], heapsortTest);
