import * as CORE from "./Core.js"
import * as EXPRESS from "express"
import {fail} from "./Result.js"
import {Method} from "./Method.js"
import {STRING} from "format"
import {INVALID} from "format"
import {FailResult} from "./Result.js"
import {SuccessResult} from "./Result.js"


export type Options<TUser extends CORE.User> = {
  name?: undefined | string
  verify: Verify<TUser>
  /** 
   * Defaults to `"username"`
  */
  usernameKey?: undefined | string
  /** 
   * Defaults to `"password"`
  */
  passwordKey?: undefined | string
  /** 
   * Defaults to a dummy formatter that only checks whether `username` is a string,
   * if so, returns it, else, returns `INVALID`.
  */
  formatUsername?: undefined | ((username: unknown) => string | INVALID)
  /** 
   * Defaults to a dummy formatter that only checks whether `password` is a string,
   * if so, returns it, else, returns `INVALID`.
  */
  formatPassword?: undefined | ((password: unknown) => string | INVALID)
  /** 
   * Defaults to `"bad username"`
  */
  badUsernameMessage?: undefined | null | string
  /** 
   * Defaults to `"bad password"`
  */
  badPasswordMessage?: undefined | null | string
  /** 
   * Defaults to `"missing username"`
  */
  missingUsernameMessage?: undefined | null | string
  /** 
   * Defaults to `"missing password"`
  */
  missingPasswordMessage?: undefined | null | string
  /** 
   * Defaults to `"missing credentials"`
  */
  missingCredentialsMessage?: undefined | null | string
}

export type Verify<TUser extends CORE.User> = {
  (username: string, password: string): (
    | FailResult
    | SuccessResult<TUser>
    | Promise<FailResult>
    | Promise<SuccessResult<TUser>>
  )
}

export function LocalMethod<TUser extends CORE.User>(options: Options<TUser>) {  
  type User = TUser
  type Request = EXPRESS.Expect<{body: object, query: object}, {}>[0][0]


  const name = options.name || "local"
  const verify = options.verify
  const usernameKey = options.usernameKey ?? "username"
  const passwordKey = options.passwordKey ?? "password"
  const formatUsername = options.formatUsername || STRING()
  const formatPassword = options.formatPassword || STRING()
  const BAD_PASSWORD_MESSAGE = options.badPasswordMessage || "bad password"
  const BAD_USERNAME_MESSAGE = options.badUsernameMessage || "bad username"
  const MISSING_PASSWORD_MESSAGE = options.missingPasswordMessage || "missing password"
  const MISSING_USERNAME_MESSAGE = options.missingUsernameMessage || "missing username"
  const MISSING_CREDENTIALS_MESSAGE = options.missingCredentialsMessage || "missing credentials"


  return Method<User, Request>(name, async (request) => {
    let store: Record<any, any>

    const body = request.body
    const query = request.query

    if (body && usernameKey in body && passwordKey in body) {
      store = body
    } else if (query && usernameKey in query && passwordKey in query) {
      store = query
    } else {
      return fail({
        status: 400, 
        message: MISSING_CREDENTIALS_MESSAGE,
      })
    }
    
    if (store[usernameKey] === undefined) {
      return fail({
        status: 400,
        message: MISSING_USERNAME_MESSAGE,
      })
    }

    if (store[passwordKey] === undefined) {
      return fail({
        status: 400,
        message: MISSING_PASSWORD_MESSAGE,
      })
    }

    const username = formatUsername(store[usernameKey])
    const password = formatPassword(store[passwordKey])

    if (username === INVALID) {
      return fail({
        status: 400,
        message: BAD_USERNAME_MESSAGE,
      })
    }

    if (password === INVALID) {
      return fail({
        status: 400,
        message: BAD_PASSWORD_MESSAGE,
      })
    }

    return verify(username, password)
  })
}


export default LocalMethod