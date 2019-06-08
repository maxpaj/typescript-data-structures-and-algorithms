import { heapsort } from "./heapsort";
import { randomArray } from "../utility/random";
import { test } from "../utility/test";

function run(size: number) {
  const arr = randomArray(size, Number.MAX_SAFE_INTEGER);
  const start = process.hrtime();
  heapsort(arr);
  return process.hrtime(start)[1];
}

test([10000, 100000, 1000000], run);
