export function fib(n: number) {
    if (n < 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

export function fib_memo(n: number, memo: number[] = new Array(n)): number {
    if (memo[n]) {
        return memo[n];
    } else if (n < 2) {
        return 1;
    }

    const result = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
    memo[n] = result;
    return result;
}

export function fib_memo_2(n: number): number {
    const memo: number[] = new Array(n + 1);
    memo[0] = 1;
    memo[1] = 1;

    for (let i = 2; i < n + 1; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[n];
}
