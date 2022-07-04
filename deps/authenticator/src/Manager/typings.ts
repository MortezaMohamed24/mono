import {Key} from "../Core.js"
import {User} from "../Core.js"
import {State} from "../Core.js"
import {Proceed} from "express"
import {Session} from "../Core.js"
import {Failure} from "../Failure.js"
import {Customize} from "express"
import {Middleware as _Middleware} from "express/src/Middleware.js"
import {Serializer} from "../Core.js"


export type Config = {
  user: User 
  kRequest: Key 
  kSession: Key
}

export type Options<TUser extends User, TKRequest extends Key, TKSession extends Key> = {
  kRequest: TKRequest
  kSession: TKSession
  serialize: Serializer<TUser>
  useSession?: undefined | boolean
}

export type ManagerUnresolved<TUser extends User> = {
  get user(): TUser | null
  set user(value: TUser | null)
  get state(): State
  get status(): number | null
  set status(value: number | null)
  get method(): string | null
  set method(value: string | null)
  get message()
  set message(value: string | null)
  get chalenges()
  set chalenges(value: string[])
  get failures(): Failure[]
  set failures(value: Failure[])
  get authenticated(): boolean
  set authenticated(value: boolean)
}

export type ManagerAuthorized<TUser extends User> = {
  get user(): TUser
  set user(value: TUser | null)
  get state(): State
  get status(): number | null
  set status(value: number | null)
  get method(): string | null
  set method(value: string | null)
  get message()
  set message(value: string | null)
  get chalenges()
  set chalenges(value: string[])
  get failures(): Failure[]
  set failures(value: Failure[])
  get authenticated(): true
  set authenticated(value: boolean)
}

export type ManagerUnauthorized<TUser extends User> = {
  get user(): null
  set user(value: TUser | null)
  get state(): State
  get status(): number | null
  set status(value: number | null)
  get method(): string | null
  set method(value: string | null)
  get message()
  set message(value: string | null)
  get chalenges()
  set chalenges(value: string[])
  get failures(): Failure[]
  set failures(value: Failure[])
  get authenticated(): false
  set authenticated(value: boolean)
}

export type Expectation<TUser extends User, TKRequest extends Key, TKSession extends Key> = (
  Customize<{
    [TKey in TKRequest]: ManagerUnresolved<TUser>
  } & {
    session: Session<TKSession>
  }>
)

export type Customization<TUser extends User, TKRequest extends Key> = (
  Customize<{
    [TKey in TKRequest]: ManagerUnresolved<TUser>
  }>
)

export interface Middleware<TUser extends User, TKRequest extends Key, TKSession extends Key> {
  (
    request: Expectation<TUser, TKRequest, TKSession>[0][0], 
    responde: Expectation<TUser, TKRequest, TKSession>[1][0], 
    proceed: Proceed,
  ): void
}