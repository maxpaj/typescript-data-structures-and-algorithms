import { ComparableNumber } from "../../utility/comparable";
import { expect } from "chai";
import { mergeSort } from "./mergesort";

describe("mergeSort", () => {
  const arrays = [
    [
      new ComparableNumber(1)
    ],
    [
      new ComparableNumber(1),
      new ComparableNumber(1)
    ],
    [
      new ComparableNumber(1),
      new ComparableNumber(1),
      new ComparableNumber(1),
      new ComparableNumber(1)
    ],
    [
      new ComparableNumber(3),
      new ComparableNumber(7),
      new ComparableNumber(10),
      new ComparableNumber(-4),
      new ComparableNumber(2),
      new ComparableNumber(3),
      new ComparableNumber(9)
    ],
    [
      new ComparableNumber(3),
      new ComparableNumber(7),
      new ComparableNumber(10),
      new ComparableNumber(-4),
      new ComparableNumber(2),
      new ComparableNumber(3),
      new ComparableNumber(9),
      new ComparableNumber(3),
      new ComparableNumber(7),
      new ComparableNumber(10),
      new ComparableNumber(-4),
      new ComparableNumber(2),
      new ComparableNumber(3),
      new ComparableNumber(9)
    ]
  ]

  arrays.forEach((unsorted) => {
    it("should sort an array correctly", () => {
      const sorted = mergeSort(unsorted);
      
      expect(sorted.length).to.equal(unsorted.length);
  
      for (let i = 0; i < sorted.length - 1; i++) {
        expect(sorted[i].number).to.be.lte(sorted[i + 1].number);
      }
    });
  });
});
