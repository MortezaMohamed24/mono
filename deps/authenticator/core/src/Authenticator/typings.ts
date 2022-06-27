import {Key} from "../Core.js"
import {User} from "../Core.js"
import {Expect} from "express"
import {Method} from "../Method.js"
import {Proceed} from "express"
import {Session} from "../Core.js"
import {Customize} from "express"
import {Authority} from "../Authority.js"
import {Middleware as _Middleware} from "express/src/Middleware.js"
import {Serializer} from "../Core.js"
import {Deserializer} from "../Core.js"


/** 
 * Options for the `Auth` Factory.
*/
export type Options<TUser extends User, TKRequest extends Key, TKSession extends Key> = {
  /** 
   * Defaults to `"none"` 
  */
  action?: undefined | "none" | "throw" | "responde"
  methods: Method<TUser>[]
  /**
   * Defaults to `"auth"`
  */
  kRequest?: undefined | TKRequest
  /** 
   * Defaults to `"__authentication_state__"`
  */
  kSession?: undefined |  TKSession
  serialize: Serializer<TUser>
  deserialize: Deserializer<TUser>
}

export type Expectation<TUser extends User, TKRequest extends Key> = (
  Expect<{
    [TKey in keyof TKRequest]?: Authority<TUser>
  } & {
    session: Session<TKRequest>
  }>
)

export type Customization<TUser extends User, TKRequest extends Key> = (
  Customize<{
    [TKey in keyof TKRequest]: Authority<TUser>
  }>
)

export interface Middleware<TUser extends User, TRequestKey extends Key> {
  (
    request: Expectation<TUser, TRequestKey>[0][0], 
    responde: Expectation<TUser, TRequestKey>[1][0], 
    proceed: Proceed,
  ): void
}