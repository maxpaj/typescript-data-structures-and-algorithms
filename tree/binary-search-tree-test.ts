import { randomNumber } from "../utility/random";
import { BinarySearchTree } from "./binary-search-tree";
import { testArray } from "../utility/test";

function treeSearchTest(arr: number[]) {
  const root = new BinarySearchTree(randomNumber(Number.MAX_SAFE_INTEGER));

  for (var i = 0; i < arr.length; i++) {
    root.insert(new BinarySearchTree(arr[i]));
  }

  const randomElement = arr[Math.floor(Math.random() * arr.length)];

  const start = process.hrtime();
  root.search(randomElement);
  return process.hrtime(start)[1];
}

testArray([100000, 1000000, 10000000], treeSearchTest);
