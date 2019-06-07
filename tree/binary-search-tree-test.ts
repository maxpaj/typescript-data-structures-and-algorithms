import { BinarySearchTree } from "./binary-search-tree";

const root = new BinarySearchTree(27);

[14, 10, 19, 35, 31, 42].forEach(e => {
  root.insert(new BinarySearchTree(e));
});

root.inorder();

const search = root.search(30);
if (search) console.log(search.toString());
