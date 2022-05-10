export function zip<T, S>(arr1: T[], arr2: S[]): [T, S][] {
    if (arr1.length > arr2.length) {
        return arr1.map((e, i) => [e, arr2[i]]);
    }

    return arr2.map((e, i) => [arr1[i], e]);
}
