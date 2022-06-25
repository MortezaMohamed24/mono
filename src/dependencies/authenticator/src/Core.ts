import {Step} from "express"
import {Method} from "./Method"
import {Proceed} from "express"
import {Request} from "express"
import {Response} from "express"
import {Customize} from "express"


export type Key = (
  | string
  | number
  | symbol
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
export interface MiddlewarAuthenticate {
  (
    request: Customize<Step, [{session: {}}, {}]>, 
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