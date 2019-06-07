# Heap

- It's a binary tree
- It's a complete binary tree (all levels are filled except perhaps the last level)
- Each node has a value that is greater than (max-heap) or lesser than (min-heap) both of it's children

## Operations

### Insert

Insert adds a node containing the element to the heap at the last position, then lets the node travel up through the tree by comparing its value to the current parent node.

O(log n) - The node containing the element will travel up at most the number of levels in the tree

### Extract

Removes the root node, then replaces the root with the last node of the tree, then lets the root node travel down the tree until it finds it's correct position in the tree.

O(log n) - The node will travel down at most the number of levels in the tree

## Algorithms

### Heapsort
