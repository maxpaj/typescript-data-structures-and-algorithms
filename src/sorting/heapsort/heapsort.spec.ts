import { ComparableNumber } from "../../utility/comparable";
import { expect } from "chai";
import { heapSort } from "./heapsort";

describe("heapSort", () => {
  it("should sort an array correctly", () => {
    const unsorted = [
      new ComparableNumber(3),
      new ComparableNumber(7),
      new ComparableNumber(10),
      new ComparableNumber(-4),
      new ComparableNumber(2),
      new ComparableNumber(3),
      new ComparableNumber(9)
    ];

    const sorted = heapSort(unsorted);
    
    expect(sorted.length).to.equal(unsorted.length);
    expect(sorted[0].number).to.equal(-4);
    expect(sorted[sorted.length - 1].number).to.equal(10);

    for (let i = 0; i < sorted.length - 1; i++) {
      expect(sorted[i].number).to.be.lte(sorted[i + 1].number);
    }
  });
});
