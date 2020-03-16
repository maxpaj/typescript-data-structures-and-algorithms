import { IComparable } from "utility/comparable";

export function merge<T extends IComparable<T>>(right: T[], left: T[]): T[] {
    const sorted = [];
    let rightIndex = 0,
        leftIndex = 0;

    while (rightIndex < right.length && leftIndex < left.length) {
        if (right[rightIndex].greaterThan(left[leftIndex])) {
            sorted.push(left[leftIndex++]);
        } else {
            sorted.push(right[rightIndex++]);
        }
    }

    return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
