function findGaps(lo: number, hi: number) {
    const result = [];

    let n = hi - lo;
    while (n > 0) {
        n = Math.floor(n / 2);
        result.push(n);
    }

    return result;
}

export function shellsort(a: number[], lo = 0, hi = a.length - 1) {
    const gaps = findGaps(lo, hi);

    for (let g = 0; g < gaps.length; g++) {
        const gap = gaps[g];
        for (let i = gap; i <= hi; i++) {
            const temp = a[i];
            let j = i;
            for (; j >= gap && a[j - gap] > temp; j -= gap) {
                a[j] = a[j - gap];
            }
            a[j] = temp;
        }
    }
}
