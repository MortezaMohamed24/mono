export default function ArrayWithItsIndexesAsValues(length: number): number[] {
  const array: number[] = [];

  for (let i = 0; i < length; i++) {
    array.push(i);
  }

  return array;
}