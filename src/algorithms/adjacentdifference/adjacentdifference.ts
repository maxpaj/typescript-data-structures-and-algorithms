export function adjacentdifference(
    arr: number[],
    lo: number = 0,
    hi: number = arr.length - 1,
    op: (n1: number, n2: number) => number = (n1 = 0, n2 = 0) => n2 - n1
) {
    let prev = lo;
    let current = lo + 1;

    const diff = [arr[prev]];

    while (current <= hi) {
        diff.push(op(arr[prev++], arr[current++]));
    }

    return diff;
}
