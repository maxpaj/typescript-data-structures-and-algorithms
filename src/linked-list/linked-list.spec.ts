import { LinkedList } from "./linked-list";
import { expect } from "chai";

describe("LinkedList", () => {
  describe("add", () => {
    it("should add elements to the end of the list", () => {
      const list = new LinkedList<number>();
  
      [9, 10, 2, 3, -1, 5].forEach(n => {
        list.add(n);
      });
  
      const peek = list.peek();
      expect(peek).to.equal(9);
    });
  });

  describe("peek", () => {
    it("should pick out the value at the given index", () => {
      const list = new LinkedList<number>();
  
      [9, 10, 2, 3, -1, 5].forEach(n => {
        list.add(n);
      });
      
      const removed = list.remove(0);
      expect(removed).to.equal(9);
    });
  });

  describe("size", () => {
    it("should return the correct number of elements in the list", () => {
      const list = new LinkedList<number>();
  
      [9, 10, 2, 3, -1, 5].forEach(n => {
        list.add(n);
      });
      
      expect(list.size()).to.equal(6);
    });
  })
});

