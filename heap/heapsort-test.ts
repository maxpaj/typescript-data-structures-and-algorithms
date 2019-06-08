import { heapsort } from "./heapsort";
import { randomArray } from "../utility/random";

function run(size: number) {
  const arr = randomArray(size, Number.MAX_SAFE_INTEGER);
  const start = process.hrtime();
  heapsort(arr);
  console.log(process.hrtime(start));
}

run(1000000);
run(10000000);
run(100000000);
