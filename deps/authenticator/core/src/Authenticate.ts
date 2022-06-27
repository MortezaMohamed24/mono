import {Key, User} from "./Core.js"
import {Expect} from "express"
import {Proceed} from "express"
import {Response} from "express"
import {Customize} from "express"
import {Authority} from "./Authority.js"


/** 
 * Options for the `authenticator.authenticate()` middleware factory.
*/
export type Options = {
  /** 
   * Names of the methods to use to authenticate the user
  */
  methods: string[]
}

export type Customization<TUser extends User> = (
  Customize<{auth: Authority<TUser>}>
)

export type Expectation<TUser extends User, TRequestKey extends Key> = (
  Expect<{
    [TKey in TRequestKey]: Authority<TUser>
  }>
)

export interface Middleware<TUser extends User, TRequestKey extends Key> {
  (
    request: Expectation<TUser, TRequestKey>[0][0], 
    responde: Expectation<TUser, TRequestKey>[1][0], 
    proceed: Proceed,
  ): void
}
