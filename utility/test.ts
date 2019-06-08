export function testRun(size: number, iterations: number, f: (size: number) => number) {
  let time = 0;
  for (let i = 0; i < iterations; i++) {
    time += f(size);
    console.log(i, size, time);
  }
  return time / iterations;
}

export function test(sizes: number[], f: (size: number) => number) {
  const runs: { size: number; average: number }[] = [];

  sizes.forEach(size => {
    const run = testRun(size, 5, f);
    runs.push({ size, average: run });
  });

  console.table(runs);
}
