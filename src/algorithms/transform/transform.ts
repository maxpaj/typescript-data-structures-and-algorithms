export function transform<T, S>(
    arr: T[],
    op: (e: T) => S,
    lo: number = 0,
    hi: number = arr.length - 1
) {
    const result = [];
    for (let i = lo; i < hi; i++) {
        result.push(op(arr[i]));
    }
    return result;
}
