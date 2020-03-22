import { ExtendedIterable } from "utility/extended-iterable";

export class Vector<T> implements ExtendedIterable<T> {
    private arr: Array<T>;

    constructor(values: T[]) {
        this.arr = values;
    }

    begin(): Iterator<T, boolean> {
        return {
            next() {
                return {
                    done: false,
                    value: this.arr[0],
                };
            },
        };
    }

    end(): Iterator<T, any, undefined> {
        return {
            next() {
                return {
                    done: false,
                    value: this.arr[0],
                };
            },
        };
    }

    [Symbol.iterator](): Iterator<T, any, undefined> {
        return this.begin();
    }
}
