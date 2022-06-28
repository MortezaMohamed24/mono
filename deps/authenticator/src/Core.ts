import {DEFAULT_K_SESSION} from "./constants.js"


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
export type Session<TKey> = (
  TKey extends Key
    ? {[TTKey in TKey]: State}
    : {[DEFAULT_K_SESSION]: State}
)
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