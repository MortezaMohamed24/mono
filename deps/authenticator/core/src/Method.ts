import {User} from "./Core.js"
import {Request} from "express"
import {AnyAuthStatus} from "./AuthenticationStatus.js"


/** 
 * A function that takes a request and authenticates it
*/
export type Method<TUser extends User> = {
  (request: Request): MethodReturn<TUser>
}
/** 
 * A method's return value
*/
export type MethodReturn<TUser extends User> = (
  | AnyAuthStatus<TUser>
  | Promise<AnyAuthStatus<TUser>>
)