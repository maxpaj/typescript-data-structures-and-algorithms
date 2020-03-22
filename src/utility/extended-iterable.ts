export interface ExtendedIterable<T> extends Iterable<T> {
    begin(): Iterator<T>;
    end(): Iterator<T>;
}
