import { Comparable } from "../utility/comparable";

export function sort<T extends Comparable<T>>(arr: T[]) {
  return split(arr);
}

function split<T extends Comparable<T>>(arr: T[]) {
  let a1 = arr, a2 = [];
  if (arr.length > 1) {
    [ a1, a2 ] = this.split(arr);
  }
  return merge(a1, a2);
}

function merge<T extends Comparable<T>>(a1: T[], a2: T[]) {
  if (a1[a1.length - 1].greaterThan(a2[a2.length - 1])) {
    return a1.concat(a2);
  }
  return a2.concat(a1);
}
