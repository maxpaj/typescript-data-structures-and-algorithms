export function swap<T>(arr: T[], a1: number, a2: number): void {
    const temp = arr[a1];
    arr[a1] = arr[a2];
    arr[a2] = temp;
}