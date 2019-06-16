import { randomNumber } from "./random";

function run(arr: number[], iterations: number, f: (arr: number[]) => number) {
  let time = 0;
  for (let i = 0; i < iterations; i++) {
    time += f(arr);
  }
  return time / iterations;
}

function scramble(arr: number[], size: number) {
  for (let i = 0; i < size; i++) {
    arr[i] = randomNumber();
  }
}

export function testArray(sizes: number[], testFunction: (arr: number[]) => number) {
  const runs: { size: number; average: number }[] = [];
  const largest = sizes.reduce((largest, current) => {
    return current > largest ? current : largest;
  }, 0);
  const arr = new Array(largest).fill(0);

  sizes.forEach(size => {
    scramble(arr, size);
    const avgrun = run(arr.slice(0, size), 5, testFunction);
    console.log(size, avgrun);
    runs.push({ size, average: avgrun });
  });

  console.table(runs);
}
