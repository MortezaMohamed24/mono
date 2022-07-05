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
 * A function to serializes a user object to be saved into the session
*/
export interface Serializer<TUser> {
  (user: TUser): string
}
/** 
 * A function to deserialize a user object out of the session
*/
export interface Deserializer<TUser> {
  (user: string): (
    | null 
    | TUser 
    | Promise<null> 
    | Promise<TUser>
  )
}