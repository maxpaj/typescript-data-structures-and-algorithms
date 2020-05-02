export function min_element(
    arr: number[],
    lo: number = 0,
    hi: number = arr.length - 1
) {
    let min = arr[lo];
    for (let i = lo; i <= hi; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
