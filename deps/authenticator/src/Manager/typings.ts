import {User} from "../Core.js"
import {State} from "../Core.js"
import {Failure} from "../Failure.js"


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