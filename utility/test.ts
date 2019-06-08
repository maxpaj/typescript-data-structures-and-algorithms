export function run(size: number, iterations: number, f: (size: number) => number) {
  let time = 0;
  for (let i = 0; i < iterations; i++) {
    time += f(size);
  }
  return time / iterations;
}

export function test(sizes: number[], f: (size: number) => number) {
  const runs: { size: number; average: number }[] = [];

  sizes.forEach(size => {
    const avgrun = run(size, 5, f);
    console.log(size, avgrun);
    runs.push({ size, average: avgrun });
  });

  console.table(runs);
}
