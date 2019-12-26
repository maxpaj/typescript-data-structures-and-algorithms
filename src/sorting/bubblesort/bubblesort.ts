import { Comparable } from "../../utility/comparable";

export function bubbleSort<T extends Comparable<T>>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i; k < arr.length; k++) {
      if (arr[i].greaterThan(arr[k])) {
        let tmp = arr[i];
        arr[i] = arr[k];
        arr[k] = tmp;
      }
    }
  }
  return arr;
}