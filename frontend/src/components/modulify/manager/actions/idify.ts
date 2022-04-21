/**
 * Converts an array of entries to an array of thier ids.
*/
export default function idify<ID>(entries: {id: ID}[]) {
  return entries.map(entry => entry.id);
}