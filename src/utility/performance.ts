const ITERATIONS = 10;

function run(arr: number[], f: (arr: number[]) => [number, number]): number {
    const time = f(arr);
    return time[0] * 1000 + time[1] / 1e6;
}

function scramble(arr: number[], size: number): void {
    for (let i = 0; i < size; i++) {
        arr[i] = Math.random() * Number.MAX_SAFE_INTEGER;
    }
}

/**
 * Runs a test function over a number of array sizes, prints the results as a table to console.
 * @param sizes An array of test sizes, referring to the number of elements for each test. E.g. 100, 1000, 10000
 * @param testFunction A test function to run the tests over, should return the time taken from process.hrtime(), e.g. ([seconds, nanoseconds])
 */
export function testArray(
    sizes: number[],
    testFunction: (arr: number[]) => [number, number]
) {
    const runs: { size: number; average: number; delta: number }[] = [];
    const largest = sizes.reduce((largest, current) => {
        return current > largest ? current : largest;
    }, 0);
    const arr = new Array(largest);

    for (let i = 0; i < sizes.length; i++) {
        const size = sizes[i];
        let result = 0;

        for (let j = 0; j < ITERATIONS; j++) {
            scramble(arr, size);
            result += run(arr.slice(0, size), testFunction);
        }

        const average = result / ITERATIONS;
        runs.push({
            size,
            average: average,
            delta: i !== 0 ? average / runs[0].average : 0,
        });
    }

    return runs;
}
