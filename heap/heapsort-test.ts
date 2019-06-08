import { heapsort } from "./heapsort";
import { randomArray } from "../utility/random";
import { test } from "../utility/test";

function heapsortTest(size: number) {
  const arr = randomArray(size, Number.MAX_SAFE_INTEGER);
  const start = process.hrtime();
  heapsort(arr);
  return process.hrtime(start)[1];
}

test([100000, 1000000, 10000000, 100000000], heapsortTest);
