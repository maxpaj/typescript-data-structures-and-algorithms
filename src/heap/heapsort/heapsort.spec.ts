import { ComparableNumber } from "../../utility/comparable";
import { expect } from "chai";
import { sort } from "./heapsort";

describe("HeapSort", () => {
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

    const sorted = sort(unsorted);
    
    expect(sorted[0].number).to.equal(-4);
    expect(sorted[sorted.length - 1].number).to.equal(10);

    for (let i = 0; i < sorted.length - 1; i++) {
      expect(sorted[i].number <= sorted[i + 1].number).to.equal(true);
    }
  });
});
