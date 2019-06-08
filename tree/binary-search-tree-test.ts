import { BinarySearchTree } from "./binary-search-tree";
import { randomArray, randomNumber } from "../utility/random";

function run(size: number) {
  const root = new BinarySearchTree(randomNumber(Number.MAX_SAFE_INTEGER));
  const arr = randomArray(size, Number.MAX_SAFE_INTEGER);

  arr.forEach(e => {
    root.insert(new BinarySearchTree(e));
  });

  const start = process.hrtime();
  const randomSearch = arr[Math.floor(Math.random() * arr.length)];
  const search = root.search(randomSearch);
  if (search) console.log(search.toString());
  else console.log("Not found");
  console.log(process.hrtime(start));
}

run(1000);
run(10000);
run(100000);
run(1000000);
run(10000000);
run(100000000);
