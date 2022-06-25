import {Request} from "express"
// -----------------------------
import {STRING} from "format"
import {INVALID} from "format"
// -----------------------------
import {fail} from "authenticator"
import {Method} from "authenticator"
import {FailAuthStatus} from "authenticator"
import {SuccessAuthStatus} from "authenticator"



export type Options = {
  verify: Verify
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

export type Verify = {
  (username: string, password: string, inbound: Request): VerifyReturn
}

export type VerifyReturn = (
  | FailAuthStatus
  | SuccessAuthStatus
  | Promise<FailAuthStatus>
  | Promise<SuccessAuthStatus>
)


export function LocalMethod(options: Options): Method {  
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


  return async (inbound) => {
    let store: Record<any, unknown>

    const body = inbound.body
    const query = inbound.query

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

    return verify(username, password, inbound)
  }
}


export default LocalMethod