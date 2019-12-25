import { ComparableNumber } from "./comparable";

function run(arr: ComparableNumber[], f: (arr: ComparableNumber[]) => [number, number]) {
  const time = f(arr);
  return time[0] * 1000 + time[1] / 1e6;
}

function scramble(arr: ComparableNumber[], size: number) {
  for (let i = 0; i < size; i++) {
    arr[i] = ComparableNumber.random();
  }
}

export function testArray(sizes: number[], testFunction: (arr: ComparableNumber[]) => [number, number]) {
  const runs: { size: number; average: number, change: number }[] = [];
  const largest = sizes.reduce((largest, current) => {
    return current > largest ? current : largest;
  }, 0);
  const arr = new Array(largest);
  const iterations = 5;

  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i];
    let result = 0;

    for (let j = 0; j < iterations; j++) {
      scramble(arr, size);
      const test_run = run(arr.slice(0, size), testFunction);
      result += test_run;
    }

    const average = result / iterations;
    runs.push({ size, average: average, change: i !== 0 ? average / runs[i - 1].average : 0 });
  }

  console.table(runs);
}
