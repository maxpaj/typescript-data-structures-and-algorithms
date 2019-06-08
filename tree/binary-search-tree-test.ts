import { randomArray, randomNumber } from "../utility/random";
import { BinarySearchTree } from "./binary-search-tree";
import { test } from "../utility/test";

function treeSearchTest(size: number) {
  const root = new BinarySearchTree(randomNumber(Number.MAX_SAFE_INTEGER));
  const arr = randomArray(size, Number.MAX_SAFE_INTEGER);

  arr.forEach(e => {
    root.insert(new BinarySearchTree(e));
  });

  const randomElement = arr[Math.floor(Math.random() * arr.length)];

  const start = process.hrtime();
  root.search(randomElement);
  return process.hrtime(start)[1];
}

test([100000, 1000000, 10000000], treeSearchTest);
