export type ElementType<T extends any[] | readonly any[]> = T extends (infer Element)[] 
  ? Element
  : T extends readonly (infer Element)[]
    ? Element
    : never

export default ElementType;