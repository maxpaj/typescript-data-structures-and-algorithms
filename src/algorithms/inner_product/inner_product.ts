export function inner_product(
    a1: number[],
    a2: number[],
    combinator: (n1: number, n2: number) => number,
    accumulator: (sum: number, current: number) => number,
    lo: number = 0,
    hi: number = a1.length - 1
) {
    let result = 0;
    for (let i = lo; i <= hi; i++) {
        result = accumulator(result, combinator(a1[i], a2[i]));
    }
    return result;
}
