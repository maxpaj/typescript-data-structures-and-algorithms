export function randomNumber(max?: number) {
  return Math.round(Math.random() * max || Number.MAX_SAFE_INTEGER);
}
