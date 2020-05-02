export function merge(right: number[], left: number[]): number[] {
    const sorted = [];
    let rightIndex = 0,
        leftIndex = 0;

    while (rightIndex < right.length && leftIndex < left.length) {
        if (right[rightIndex] > left[leftIndex]) {
            sorted.push(left[leftIndex++]);
        } else {
            sorted.push(right[rightIndex++]);
        }
    }

    return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
