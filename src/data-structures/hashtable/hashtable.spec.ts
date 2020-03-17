import { HashTable } from "./hashtable";
import { expect } from "chai";
import { KeyString } from "../../utility/keys";

describe("HashTable", () => {
    describe("get", () => {
        it("should return data previously entered on a specific key", () => {
            const t = new HashTable<KeyString, number>(10);
            t.set(new KeyString("ABC"), 123);
            const v = t.get(new KeyString("ABC"));
            expect(v).to.equal(123);
        });
    });

    describe("set", () => {
        it("should set the key-value pair of the table to the given value and key combination", () => {
            const t = new HashTable<KeyString, number>(10);
            t.set(new KeyString("ABC"), 123);
            expect(t.get(new KeyString("ABC"))).to.equal(123);
        });

        it("should replace the key-value pair in the table for the given key", () => {
            const t = new HashTable<KeyString, number>(10);
            t.set(new KeyString("ABC"), 123);
            expect(t.get(new KeyString("ABC"))).to.equal(123);

            t.set(new KeyString("ABC"), 456);
            expect(t.get(new KeyString("ABC"))).to.equal(456);
        });

        it("should return the replaced value if there was one already present on the given key", () => {
            const t = new HashTable<KeyString, number>(10);
            expect(t.set(new KeyString("ABC"), 123)).to.equal(null);
            expect(t.get(new KeyString("ABC"))).to.equal(123);

            expect(t.set(new KeyString("ABC"), 456)).to.equal(123);
            expect(t.get(new KeyString("ABC"))).to.equal(456);
        });
    });

    describe("remove", () => {
        it("should remove the key-value pair from the table given by key and return the removed value", () => {
            const t = new HashTable<KeyString, number>(10);
            t.set(new KeyString("ABC"), 123);
            expect(t.remove(new KeyString("ABC"))).to.equal(123);
        });

        it("should return null if attempting to remove a non-existing key-value pair", () => {
            const t = new HashTable<KeyString, number>(10);
            expect(t.remove(new KeyString("ABC"))).to.equal(null);
        });
    });
});
