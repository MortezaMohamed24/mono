/** 
 * TODO: Document this module.
*/


import {Locals} from "./Locals.js"
import {Params} from "./RouteParameter.js"
import {Request} from "./Request.js"
import {Response} from "./Response.js"


/** 
 * Omits the keys of `TObjectB` from `TObjectA`.
 * 
 * If the operation returns `never` (possibly because `TObjectB` has no keys),
 * `TObjectA` is returned unmodified.
*/
type SafeOmit0<TObjectA extends object, TObjectB extends object> = (
  Omit<TObjectA, keyof TObjectB> extends never ? TObjectA : Omit<TObjectA, keyof TObjectB> 
)


export type Step = [
  Line,
  Line,
]

export type Line = [
  Customization,
  Customization,
  Customization,
]

export type Customization = (
  object
)

export type Customizations = [
  Customization, 
  Customization,
]


export type Customize<TStep extends Step, TCustomizations extends Customizations> = (
  A<[
    [TStep[0][1], TStep[0][1], TCustomizations[0]],
    [TStep[1][1], TStep[1][1], TCustomizations[1]],
  ]>
)

type A<TStep extends Step> = (
  C<[
    B<TStep[0]>,
    B<TStep[1]>,
  ]>
)


type B<T extends [object, object, object]> = [
  SafeOmit0<Required<T[0]>, T[2]> & SafeOmit0<Required<T[1]>, T[2]> & Partial<T[2]>,
  SafeOmit0<Required<T[1]>, T[2]>,
  Partial<T[2]>
]


type C<TStep extends Step> = [
  [C0<TStep[0][0]>, TStep[0][1], TStep[0][2]],
  [C1<TStep[1][0]>, TStep[1][1], TStep[1][2]],
]

type C0<TCustomization extends object> = (
  & SafeOmit0<TCustomization, Request>
  & Request<
      TCustomization extends {locals: Locals} ? TCustomization["locals"] : never,
      TCustomization extends {params: Params} ? TCustomization["params"] : never
    >
)

type C1<TCustomization extends object> = (
  & SafeOmit0<TCustomization, Response>
  & Response<
      TCustomization extends {body?: unknown} ? TCustomization["body"] : never,
      TCustomization extends {locals: Locals} ? TCustomization["locals"] : never,
      TCustomization extends {status: number} ? TCustomization["status"] : never
    >
)