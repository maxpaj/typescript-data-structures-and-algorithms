import { transform } from "./transform";

describe("transform", () => {
    xit("should transform all elements of an array", () => {
        const arr = [1, 2, 3, 4];
        transform(arr[Symbol.iterator](), arr[Symbol.iterator](), e => e * 2);
    });
});
