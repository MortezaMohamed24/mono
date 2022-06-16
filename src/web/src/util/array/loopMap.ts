export default function loopMap<T extends unknown>(iterations: number, callback: (i: number) => T) {
  const array: T[] = [];

  if (iterations >= 0) {
    for (let i = 0; i < iterations; i++) {
      array.push(callback(i));
    }
  }

  return array;
};