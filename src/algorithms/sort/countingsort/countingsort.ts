export function countingsort(
    arr: number[],
    base = 10,
    lo = 0,
    hi = arr.length - 1
): void {
    const counts = new Array<number>(base).fill(0);

    // Fetch the indices
    for (let i = lo; i <= hi; i++) {
        counts[arr[i]]++;
    }

    // Accumulate
    for (let i = 1; i < counts.length; i++) {
        counts[i] = counts[i - 1] + (counts[i] || 0);
    }

    // Shift one
    counts.unshift(0);

    // Fill in the numbers
    for (let i = 0; i < counts.length - 1; i++) {
        for (let j = counts[i]; j < counts[i + 1]; j++) {
            arr[j] = i;
        }
    }
}
