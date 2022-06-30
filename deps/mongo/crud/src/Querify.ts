import {Oid} from "oid"


type Querify<T extends object> = {
  [Key in Exclude<keyof T, "id" | "_id">]?: 
    T[Key] extends any[]
      ? QuerifyArray<T[Key]>
      : QuerifyValue<T[Key]>
}

type QuerifyArray<T extends any[]> = T extends (infer Element)[]
  ? WithLocalOperators<Element | Element[]>
  : never

type QuerifyValue<T> = [T] extends [Oid] 
  ? WithLocalOperators<Oid | string>
  : WithLocalOperators<T>

type WithLocalOperators<T> = 
  | WithEQ<T>
  | WithGQ<T>
  | WithLT<T>
  | WithNE<T>
  | WithIN<T>
  | WithNIN<T>
  | WithGTE<T>
  | WithLTE<T>
  
type WithEQ<T> = T | {$eq: T extends string ? T | RegExp | {$regexp: RegExp} : T}
type WithGQ<T> = T | {$gt: T}
type WithLT<T> = T | {$lt: T}
type WithNE<T> = T | {$ne: T}
type WithIN<T> = T | {$in: ([T] extends [string] ? T | RegExp : T)[]}
type WithNIN<T> = T | {$nin: ([T] extends [string] ? T | RegExp : T)[]}
type WithGTE<T> = T | {$gte: T}
type WithLTE<T> = T | {$lte: T}


export {Querify}
export default Querify