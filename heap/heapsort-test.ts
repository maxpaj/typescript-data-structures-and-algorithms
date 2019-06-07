import { heapsort } from "./heapsort";

function randomArray(length: number, max: number) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.round(Math.random() * max));
  }
  return arr;
}

function run(size: number) {
  const arr = randomArray(size, Number.MAX_SAFE_INTEGER);
  const start = process.hrtime();
  heapsort(arr);
  console.log(process.hrtime(start));
}

run(1000000);
run(10000000);
run(100000000);
