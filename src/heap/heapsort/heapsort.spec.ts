import { ComparableNumber } from "../../utility/comparable";
import { Heapsort } from "./heapsort";
import { expect } from "chai";

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

    const sorted = Heapsort.sort(unsorted);
    expect(sorted[0]).to.equal(-4);
  });
});
