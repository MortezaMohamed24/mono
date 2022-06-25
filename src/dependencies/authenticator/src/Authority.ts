import {State} from "./Core"

/** 
 * The authentication extension assigned to `request[inRequestKey]` 
 * by the `authenticator.initialize()` middleware.
*/
export type Authority<TUser> = {
  get user(): TUser | null
  set user(newUserData: TUser | null) 
  get state(): State
  get failures(): Failure[]
  set failures(failuers: Failure[])
  get authenticated(): boolean
  set authenticated(value: boolean)
}

export type AuthorityAuthorized<TUser> = {
  get user(): TUser
  set user(newUserData: TUser) 
  get state(): State
  get failures(): null
  set failures(failuers: null)
  get authenticated(): true
  set authenticated(value: true)
}

export type AuthorityUnauthorized = {
  get user(): null
  set user(newUserData: null) 
  get state(): State
  get failures(): Failure[]
  set failures(failuers: Failure[])
  get authenticated(): false
  set authenticated(value: false)
}

/** 
 * A method's failure
*/
export type Failure = {
  status: number | undefined
  message: string | undefined
  challenge: string | undefined
}