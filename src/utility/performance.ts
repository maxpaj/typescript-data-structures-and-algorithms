import { ComparableNumber } from "./comparable";

const ITERATIONS = 10;

function run(
    arr: ComparableNumber[],
    f: (arr: ComparableNumber[]) => [number, number]
): number {
    const time = f(arr);
    return time[0] * 1000 + time[1] / 1e6;
}

function scramble(arr: ComparableNumber[], size: number): void {
    for (let i = 0; i < size; i++) {
        arr[i] = ComparableNumber.random();
    }
}

/**
 * Runs a test function over a number of array sizes
 * @param sizes
 * @param testFunction
 */
export function testArray(
    sizes: number[],
    testFunction: (arr: ComparableNumber[]) => [number, number]
): void {
    const runs: { size: number; average: number; change: number }[] = [];
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
            change: i !== 0 ? average / runs[0].average : 0
        });
    }

    console.table(runs);
}
