import {User} from "./Core"
import {State} from "./Core"

/** 
 * The authentication extension assigned to `request[inRequestKey]` 
 * by the `authenticator.initialize()` middleware.
*/
export type Authority = {
  get user():  | null
  set user(newUserData: User | null) 
  get state(): State
  get failures(): Failure[]
  set failures(failuers: Failure[])
  get authenticated(): boolean
  set authenticated(value: boolean)
}

/** 
 * A method's failure
*/
export type Failure = {
  status: number | undefined
  message: string | undefined
  challenge: string | undefined
}