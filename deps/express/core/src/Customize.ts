/** 
 * TODO: Document this module.
*/


import {Locals} from "./Locals.js"
import {Params} from "./RouteParameter.js"
import {Request} from "./Request.js"
import {Response} from "./Response.js"


export type Stop = [
  req: ItemHistory,
  res: ItemHistory,
]

export type Item = (
  object
)

export type ItemHistory = [
  AllCustomizations: Item,
  PrevCustomization: Item,
  CurrCustomization: Item,
]

export type EmptyStop = [
  req: [{}, {}, {}],
  res: [{}, {}, {}],
]

export type Stop0 = (
  Customize<{}, {}>
)


export type Customize<TReq extends Item, TRes extends Item = {}, TOptional extends boolean = true, TStop extends Stop = EmptyStop> = (
  TOptional extends true
    ? OptionalCustomize<TReq, TRes, TStop>
    : RequiredCustomize<TReq, TRes, TStop>
)

export type OptionalCustomize<TReq extends Item, TRes extends Item, TStop extends Stop> = (
  WithReqAndRes<[
    MakeOptionalItemStop<[TStop[0][1], TStop[0][2], TReq]>,
    MakeOptionalItemStop<[TStop[1][1], TStop[1][2], TRes]>,
  ]>
)

export type RequiredCustomize<TReq extends Item, TRes extends Item, TStop extends Stop> = (
  WithReqAndRes<[
    MakeRequiredItemStop<[TStop[0][1], TStop[0][2], TReq]>,
    MakeRequiredItemStop<[TStop[1][1], TStop[1][2], TRes]>,
  ]>
)

export type MakeOptionalItemStop<T extends ItemHistory> = [
  & Partial<T[2]>
  & SafeOmit<Required<T[0]>, T[2]> 
  & SafeOmit<Required<T[1]>, T[2]>,

  // ----------------------------

  SafeOmit<Required<T[1]>, T[2]>, 

  // ----------------------------

  Partial<T[2]>,
]

export type MakeRequiredItemStop<T extends ItemHistory> = [
  & Required<T[2]>
  & SafeOmit<Required<T[0]>, T[2]> 
  & SafeOmit<Required<T[1]>, T[2]>,
 
  // ----------------------------
  
  SafeOmit<Required<T[1]>, T[2]>,

  // ----------------------------

  Required<T[2]>
]


export type WithReq<T extends Item> = (
  & SafeOmit<T, Request>
  & Request<
      T extends {locals: Locals} ? T["locals"] : never,
      T extends {params: Params} ? T["params"] : never
    >
)

export type WithRes<T extends Item> = (
  & SafeOmit<T, Response>
  & Response<
      T extends {body?: unknown} ? T["body"] : never,
      T extends {locals: Locals} ? T["locals"] : never,
      T extends {status: number} ? T["status"] : number
    >
)

export type WithReqAndRes<TStop extends Stop> = [
  [WithReq<TStop[0][0]>, TStop[0][1], TStop[0][2]],
  [WithRes<TStop[1][0]>, TStop[1][1], TStop[1][2]],
]


/** 
 * Omits the keys of `TObjectB` from `TObjectA`.
 * 
 * If the operation returns `never` (possibly because `TObjectB` has no keys),
 * `TObjectA` is returned unmodified.
*/
export type SafeOmit<TObjectA extends object, TObjectB extends object> = (
  keyof TObjectB extends never ? TObjectA : Omit<TObjectA, keyof TObjectB> 
)



type PushOptionalEdit<> = (
  
)
// PushRequiredEdit
// PushStop

export type merge = (
  ""
)

export type expect = (
  ""
)

export type modify<TStop extends Stop, TReq extends Item, TRes extends Item = > = (
  ""
)

export default Customize 