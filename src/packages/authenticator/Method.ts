import {Request} from "express"
import {AnyAuthStatus} from "./AuthenticationStatus"

/** 
 * A function that takes a request and authenticates it
*/
export type Method = {
  (inbound: Request): MethodReturn
}
/** 
 * A method's return value
*/
export type MethodReturn = (
  | AnyAuthStatus
  | Promise<AnyAuthStatus>
)