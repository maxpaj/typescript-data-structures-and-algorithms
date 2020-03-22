import { BinarySearchTree } from "./binary-search-tree";
import { testArray } from "../../../utility/performance";

function treeSearchTest(arr: number[]): [number, number] {
    const root = new BinarySearchTree(
        Math.random() * Number.MAX_SAFE_INTEGER,
        arr.length / 2
    );

    for (let i = 0; i < arr.length; i++) {
        root.insert(arr[i], i);
    }

    const randomElement = arr[Math.floor(Math.random() * arr.length)];

    const start = process.hrtime();
    root.search(randomElement);
    return process.hrtime(start);
}

testArray([100000, 1000000, 10000000], treeSearchTest);
