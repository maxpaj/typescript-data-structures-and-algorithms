export function binary_search<T>(
    arr: T[],
    search: T,
    lo = 0,
    hi = arr.length - 1
): number {
    const index = Math.floor((hi + lo) / 2);
    if (search === arr[index]) {
        return index;
    } else if (search > arr[index]) {
        return binary_search(arr, search, index, hi);
    } else {
        return binary_search(arr, search, lo, index);
    }
}
