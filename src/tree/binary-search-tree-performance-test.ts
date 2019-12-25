import { BinarySearchTree } from "./binary-search-tree";
import { testArray } from "../utility/performance";
import { ComparableNumber } from "../utility/comparable";

function treeSearchTest(arr: ComparableNumber[]) {
  const root = new BinarySearchTree(ComparableNumber.random());

  for (var i = 0; i < arr.length; i++) {
    root.insert(new BinarySearchTree(arr[i]));
  }

  const randomElement = arr[Math.floor(Math.random() * arr.length)];

  const start = process.hrtime();
  root.search(randomElement);
  return process.hrtime(start);
}

testArray([100000, 1000000, 10000000], treeSearchTest);
