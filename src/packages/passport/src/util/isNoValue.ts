/**
 * Determines whether or not `value` is either `null` or `undefined`
 */
export function isNoValue(value: unknown): value is (null | undefined) {
  return value === null || value === undefined
}


export default isNoValue