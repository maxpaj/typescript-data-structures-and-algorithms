import { Comparable } from "../../utility/comparable";

function merge<T extends Comparable<T>>(right: T[], left: T[]): T[] {
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

export function mergesort<T extends Comparable<T>>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const index = Math.floor(arr.length / 2);
    const a1 = mergesort(arr.slice(0, index));
    const a2 = mergesort(arr.slice(index, arr.length));

    return merge(a1, a2);
}
