export function randomNumber(max: number) {
  return Math.round(Math.random() * max);
}

export function randomArray(length: number, max: number) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(randomNumber(max));
  }
  return arr;
}
