import { IComparable } from "../../utility/comparable";

export class RedBlackTree<K extends IComparable<K>, V> {
    private leftChild: RedBlackTree<K, V>;
    private rightChild: RedBlackTree<K, V>;
    private color: boolean;

    constructor(color: boolean) {
        this.color = color;
    }
}