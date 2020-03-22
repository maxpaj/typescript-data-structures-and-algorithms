import { BinarySearchTree } from "./binary-search-tree";
import { expect } from "chai";

describe("BinarySearchTree", () => {
    describe("search", () => {
        it("should return the node given by the key", () => {
            const bst = new BinarySearchTree<number, string>(0, "ABC");
            bst.insert(1, "DEF");
            bst.insert(3, "GHI");
            bst.insert(-2, "JKL");

            const found = bst.search(-2);

            expect(found).to.equal("JKL");
        });
    });

    describe("remove", () => {
        it("should remove the node given by the key", () => {
            const bst = new BinarySearchTree<number, string>(0, "ABC");
            bst.insert(1, "DEF");
            bst.insert(3, "GHI");
            bst.insert(-2, "JKL");
            bst.remove(1);

            const found = bst.search(1);

            expect(found).to.equal(null);
        });
    });

    describe("inorder", () => {
        it("should iterate the tree in the correct order", () => {
            const bst = new BinarySearchTree<number, string>(0, "ABC");
            bst.insert(1, "DEF");
            bst.insert(3, "GHI");
            bst.insert(-2, "JKL");

            const order = [];
            bst.inorder((n: BinarySearchTree<number, string>) => {
                order.push(n.value);
            });

            expect(order[0]).to.equal("JKL");
            expect(order[1]).to.equal("ABC");
            expect(order[2]).to.equal("DEF");
            expect(order[3]).to.equal("GHI");
        });
    });

    describe("iterator", () => {
        it("should iterate in-order", () => {
            const bst = new BinarySearchTree<number, string>(0, "ABC");
            bst.insert(1, "DEF");
            bst.insert(3, "GHI");
            bst.insert(-2, "JKL");

            const result = [];
            for (const e of bst) {
                result.push(e);
            }

            expect(result[0]).to.equal("JKL");
            expect(result[1]).to.equal("ABC");
            expect(result[2]).to.equal("DEF");
            expect(result[3]).to.equal("GHI");
        });
    });
});
