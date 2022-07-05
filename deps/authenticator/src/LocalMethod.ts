import {User} from "./Core.js"
import {fail} from "./Result.js"
import {Method} from "./Method.js"
import {STRING} from "format"
import {success} from "./Result.js"
import {INVALID} from "format"


export type Options<TUser extends User> = {
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
   * Defaults to `"unknown user"`
  */
  unknownUserMessage?: undefined | null | string
  /** 
   * Defaults to `"missing username"`
  */
  missingUsernameMessage?: undefined | null | string
  /** 
   * Defaults to `"missing password"`
  */
  missingPasswordMessage?: undefined | null | string
  /** 
   * Defaults to `"incorrect password"`
  */
  incorrectPasswoedMessage?: undefined | null | string
  /** 
   * Defaults to `"missing credentials"`
  */
  missingCredentialsMessage?: undefined | null | string
}

export type Verify<TUser extends User> = {
  (username: string, password: string): (
    | TUser
    | VerifyReturn
  )
}

export enum VerifyReturn {
  UNKNOWN_USER = "BAD_USERNAME",
  INCORRECT_PASSWPRD = "BAD_PASSWORD",
}

export function LocalMethod<TUser extends User>(options: Options<TUser>) {  
  const name = options.name || "local"
  const verify = options.verify
  const usernameKey = options.usernameKey ?? "username"
  const passwordKey = options.passwordKey ?? "password"
  const formatUsername = options.formatUsername || STRING()
  const formatPassword = options.formatPassword || STRING()
  const BAD_PASSWORD_MESSAGE = options.badPasswordMessage || "bad password"
  const BAD_USERNAME_MESSAGE = options.badUsernameMessage || "bad username"
  const UNKNOWN_USER_MESSAGE = options.unknownUserMessage || "unknown user"
  const MISSING_PASSWORD_MESSAGE = options.missingPasswordMessage || "missing password"
  const MISSING_USERNAME_MESSAGE = options.missingUsernameMessage || "missing username"
  const INCORRECT_PASSWORD_MESSAGE = options.incorrectPasswoedMessage || "incorrect password"
  const MISSING_CREDENTIALS_MESSAGE = options.missingCredentialsMessage || "missing credentials"


  return Method<TUser>(name, async (request) => {
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

    const verification = verify(username, password)

    if (verification === VerifyReturn.UNKNOWN_USER) {
      return fail({
        status: 400,
        message: UNKNOWN_USER_MESSAGE,
      })
    }

    if (verification === VerifyReturn.INCORRECT_PASSWPRD) {
      return fail({
        status: 400,
        message: INCORRECT_PASSWORD_MESSAGE,
      })
    }

    return success(verification)
  })
}


export default LocalMethod