import { HashTable } from "./hashtable";
import { expect } from "chai";

describe("HashTable", () => {
    describe("get", () => {
        it("should return data previously entered on a specific key", () => {
            const t = new HashTable<number>(10);
            t.set("ABC", 123);
            const v = t.get("ABC");
            expect(v).to.equal(123);
        });
    });
});