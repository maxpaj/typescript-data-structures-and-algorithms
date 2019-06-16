import { LinkedList } from "./linkedlist";

const l = new LinkedList<number>();

[9, 10, 2, 3, -1, 5].forEach(n => {
  l.add(n);
});

console.log(l.toString());

l.remove(0);

console.log(l.toString());
