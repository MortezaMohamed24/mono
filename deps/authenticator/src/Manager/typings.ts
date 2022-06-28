import {Key} from "../Core.js"
import {User} from "../Core.js"
import {State} from "../Core.js"
import {Expect} from "express"
import {Proceed} from "express"
import {Session} from "../Core.js"
import {Failure} from "../Failure.js"
import {Customize} from "express"
import {Middleware as _Middleware} from "express/src/Middleware.js"
import {Serializer} from "../Core.js"
import {DEFAULT_K_REQUEST} from "src/constants.js"


export type Config = {
  user: User 
  kRequest: Key 
  kSession: Key
}

export type Options<TConfig extends Config> = {
  kRequest?: undefined | TConfig["kRequest"]
  kSession?: undefined | TConfig["kSession"]
  serialize: Serializer<TConfig["user"]>
  useSession?: undefined | boolean
}

export type Manager<TUser extends User> = {
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

export type Expectation<T extends Config> = (
  Expect<
    & (
      T["kRequest"] extends Key
        ? {[TKey in keyof T["kRequest"]]?: Manager<T["user"]>} 
        : {[DEFAULT_K_REQUEST]: Manager<T["user"]>}
    ) & ({
      session: Session<T["kSession"]>,
    })
  >
)

export type Customization<T extends Config> = (
  Customize<{
    [TKey in keyof T["kRequest"]]: Manager<T["user"]>
  }>
)

export interface Middleware<TConfig extends Config> {
  (
    request: Expectation<TConfig>[0][0], 
    responde: Expectation<TConfig>[1][0], 
    proceed: Proceed,
  ): void
}