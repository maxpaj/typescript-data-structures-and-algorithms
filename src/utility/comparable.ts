export class ComparableNumber implements Comparable<ComparableNumber> {
  constructor(public number: number) {}

  compareTo(value: ComparableNumber) {
    return this.number - value.number;
  }

  greaterThan(value: ComparableNumber) {
    return this.number > value.number;
  }

  equals(value: ComparableNumber) {
    return this.number === value.number;
  }

  lesserThan(value: ComparableNumber) {
    return this.number < value.number;
  }

  static random(max?: number) {
    return new ComparableNumber(
      Math.round(Math.random() * max || Number.MAX_SAFE_INTEGER)
    );
  }
}

export interface Comparable<T> {
  compareTo(value: T): number;
  greaterThan(value: T): boolean;
  equals(value: T): boolean;
  lesserThan(value: T): boolean;
}
