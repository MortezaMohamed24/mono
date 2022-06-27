type Key = (
  | string
  | symbol
  | number
)

type Descriptors = (
  (
    | [key: string, type: "getter", value: any]
    | [key: string, type: "setter", value: any]
    | [key: string, type: "method", value: any]
  )[]
)


function define<T extends object>(target: T, key: Key, descriptors: Descriptors) {
  (target as any)[key] = {}


  for (let [key, type, value] of descriptors) {
    switch (type) {
      case "getter": Object.defineProperty(target, key, {get: value}); break
      case "setter": Object.defineProperty(target, key, {set: value}); break
      case "method": Object.defineProperty(target, key, {value: value}); break
    }
  }
}



export {define}
export default define