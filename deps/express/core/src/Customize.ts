/** 
 * TODO: Document this module.
*/


import {Locals} from "./Locals.js"
import {Params} from "./RouteParameter.js"
import {Request} from "./Request.js"
import {Response} from "./Response.js"



type Stop = [
  req: ItemHistory,
  res: ItemHistory,
]

type Item = (
  object
)

type ItemHistory = [
  AllCustomizations: Item,
  PrevCustomization: Item,
  LastCustomization: Item,
]


type Merge<TStop extends Stop, TItems extends [Item, Item]> = (
  A<[
    [TStop[0][1], TStop[0][2], TItems[0]],
    [TStop[1][1], TStop[1][2], TItems[1]],
  ]>
)

type Expect<T1 extends Item = {}, T2 extends Item = {}> = ([
  [C0<T1>, C0<T1>, C0<T1>],
  [C1<T2>, C1<T2>, C1<T2>],
])

type Customize<T1 extends Item, T2 extends Item = {}> = (
  A<[
    [{}, {}, T1],
    [{}, {}, T2],
  ]>
)


type A<TStop extends Stop> = (
  C<[
    B<TStop[0]>,
    B<TStop[1]>,
  ]>
)

type B<T extends ItemHistory> = [
  SafeOmit<Required<T[0]>, T[2]> & SafeOmit<Required<T[1]>, T[2]> & Partial<T[2]>,
  SafeOmit<Required<T[1]>, T[2]>,
  Partial<T[2]>
]


type C<TStop extends Stop> = [
  [C0<TStop[0][0]>, TStop[0][1], TStop[0][2]],
  [C1<TStop[1][0]>, TStop[1][1], TStop[1][2]],
]

type C0<TCustomization extends object> = (
  & SafeOmit<TCustomization, Request>
  & Request<
      TCustomization extends {locals: Locals} ? TCustomization["locals"] : never,
      TCustomization extends {params: Params} ? TCustomization["params"] : never
    >
)

type C1<TCustomization extends object> = (
  & SafeOmit<TCustomization, Response>
  & Response<
      TCustomization extends {body?: unknown} ? TCustomization["body"] : never,
      TCustomization extends {locals: Locals} ? TCustomization["locals"] : never,
      TCustomization extends {status: number} ? TCustomization["status"] : never
    >
)


/** 
 * Omits the keys of `TObjectB` from `TObjectA`.
 * 
 * If the operation returns `never` (possibly because `TObjectB` has no keys),
 * `TObjectA` is returned unmodified.
*/
type SafeOmit<TObjectA extends object, TObjectB extends object> = (
  keyof TObjectB extends never ? TObjectA : Omit<TObjectA, keyof TObjectB> 
)



export {Stop}
export {Merge}
export {Expect}
export {Customize}