export function transform<T, S>(
    first: Iterator<T>,
    last: Iterator<T>,
    op: (e: T) => S
) {
    const result = [];
    while (first != last) {
        result.push(op(first.next().value));
    }
    return result;
}
