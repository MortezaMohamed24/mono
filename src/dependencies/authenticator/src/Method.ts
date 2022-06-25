import {Request} from "express"
import {AnyAuthStatus} from "./AuthenticationStatus"


/** 
 * A function that takes a request and authenticates it
*/
export type Method<TUser> = {
  (inbound: Request): MethodReturn<TUser>
}
/** 
 * A method's return value
*/
export type MethodReturn<TUser> = (
  | AnyAuthStatus<TUser>
  | Promise<AnyAuthStatus<TUser>>
)