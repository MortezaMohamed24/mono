import {Method} from "./Method.js"
import {Proceed} from "express"
import {Request} from "express"
import {Response} from "express"
import {Customize} from "express"
import {Authority} from "./Authority.js"


export type Key = (
  | string
  | number
  | symbol
)
export type User = (
  object
)
/** 
 * The authenticator's state in the session.
*/
export type State =  {
  user?: string
}
/** 
 * A session object with the authenticator's state in it.
*/
export type Session<TKey extends Key> = {
  [TTKey in TKey]: State
}
/** 
 * Options for the `Authenticator` factory.
*/
export interface Options<TUser extends object, TRequestKey extends Key, TSessionKey extends Key> {
  methods?: Record<string, Method<TUser>>
  requestKey: TRequestKey
  sessionkey: TSessionKey
  serializer: Serializer<TUser>
  deserializer: Deserializer<TUser>
}
/** 
 * A function to serializes a user object to be saved into the session
*/
export interface Serializer<TUser> {
  (user: TUser): string
}
/** 
 * A function to deserialize a user object out of the session
*/
export interface Deserializer<TUser> {
  (user: string): TUser | Promise<TUser>
}
/** 
 * Any middleware created by an `authenticator` instance.
*/
export interface InitializeMiddlewar<TUser> {
  (
    request: Customize<{auth: Authority<TUser>, session: {}}>, 
    responde: Response, 
    proceed: Proceed,
  ): void
}
export interface AuthenticateMiddlewar<TUser> {
  (
    request: Customize<{auth: Authority<TUser>}>, 
    responde: Response, 
    proceed: Proceed,
  ): void
}
/** 
 * Any middleware created by an `authenticator` instance.
*/
export interface Middleware {
  (
    request: Request, 
    responde: Response, 
    proceed: Proceed,
  ): void
}
/** 
 * Any middleware created by an `authenticator` instance.
*/
export interface Middleware {
  (
    request: Request, 
    responde: Response, 
    proceed: Proceed,
  ): void
}