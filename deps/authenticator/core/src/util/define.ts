export type Key = string | number | symbol


/** 
 * Creates a field on `target` whose name is `key` and whose value is an object 
 * whose properties are defined via `descriptors`.
*/
export function define<TKey extends Key>(key: TKey, target: Record<TKey, unknown>, descriptors: PropertyDescriptorMap) {  
  return Object.defineProperty(target, key, {
    value: Object.defineProperties({}, descriptors),
    writable: false,
    configurable: false,
  })
}


export default define