import { randomNumber } from "../utility/random";
import { BinarySearchTree } from "./binary-search-tree";
import { test } from "../utility/test";

function treeSearchTest(arr: number[], size: number) {
  const root = new BinarySearchTree(randomNumber(Number.MAX_SAFE_INTEGER));

  for (var i = 0; i < size; i++) {
    root.insert(new BinarySearchTree(arr[i]));
  }

  const randomElement = arr[Math.floor(Math.random() * size)];

  const start = process.hrtime();
  root.search(randomElement);
  return process.hrtime(start)[1];
}

test([100000, 1000000, 10000000], treeSearchTest);
