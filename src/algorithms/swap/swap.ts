export function swap(arr: any[], a1: number, a2: number): void {
    const temp = arr[a1];
    arr[a1] = arr[a2];
    arr[a2] = temp;
}
