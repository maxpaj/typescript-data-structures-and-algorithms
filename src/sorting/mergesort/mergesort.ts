import { Comparable } from "../../utility/comparable";

export function mergeSort<T extends Comparable<T>>(arr: T[]) {
  if (arr.length <= 1) {
    return arr;
  }

  const index = Math.floor(arr.length / 2);
  const a1 = mergeSort(arr.slice(0, index));
  const a2 = mergeSort(arr.slice(index, arr.length));

  return merge(a1, a2);
}

function merge<T extends Comparable<T>>(right: T[], left: T[]) {
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
