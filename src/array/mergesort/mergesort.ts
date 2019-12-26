import { Comparable } from "../../utility/comparable";

export function mergeSort<T extends Comparable<T>>(arr: T[]) {
  return split(arr);
}

function split<T extends Comparable<T>>(arr: T[]) {
  if (arr.length < 2) {
    return arr;
  }

  let a1 = arr,
    a2 = [];

  let index = Math.floor(arr.length / 2);
  a1 = split(arr.slice(0, index));
  a2 = split(arr.slice(index, arr.length));
  let merged = merge(a1, a2);

  return merged;
}

function merge<T extends Comparable<T>>(a1: T[], a2: T[]) {
  let arr = [];
  while (a1.length > 0 && a2.length > 0) {
    if (a1[0].greaterThan(a2[0])) {
      arr = arr.concat(a2.splice(0, 1));
    } else {
      arr = arr.concat(a1.splice(0, 1));
    }
  }

  if (a1.length === 0) {
    return arr.concat(a2);
  }
  return arr.concat(a1);
}
