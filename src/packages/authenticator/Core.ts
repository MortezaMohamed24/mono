import {Method} from "./Method"
import {Request} from "express"
import {Response} from "express"
import {STATE_KEY} from "./constants"
import {NextFunction} from "express"


export type User = (
  Authenticator.User
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
export type Session = {
  [STATE_KEY]: State
}
/** 
 * Options for the `Authenticator` factory.
*/
export interface Options {
  methods?: Record<string, Method>
  serializer: Serializer
  deserializer: Deserializer
}
/** 
 * A function to serializes a user object to be saved into the session
*/
export interface Serializer {
  (user: User): string
}
/** 
 * A function to deserialize a user object out of the session
*/
export interface Deserializer {
  (user: string): User | Promise<User>
}
/** 
 * Any middleware created by an `authenticator` instance.
*/
export interface Middleware {
  (
    inbound: Request, 
    outbound: Response, 
    proceed: NextFunction,
  ): void
}