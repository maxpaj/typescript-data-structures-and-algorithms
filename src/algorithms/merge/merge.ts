export function merge(
    right: number[],
    left: number[],
    predicate: (left: number, right: number) => boolean = (left, right) =>
        right > left
): number[] {
    const sorted = [];
    let rightIndex = 0,
        leftIndex = 0;

    while (rightIndex < right.length && leftIndex < left.length) {
        if (predicate(left[leftIndex], right[rightIndex])) {
            sorted.push(left[leftIndex++]);
        } else {
            sorted.push(right[rightIndex++]);
        }
    }

    return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
