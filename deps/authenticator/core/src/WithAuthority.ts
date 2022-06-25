import {Customize} from "express"
import {Authority} from "./Authority.js"
import {Middleware} from "express"
import {STATUS_CODES} from "node:http"
import {AuthenticationError} from "./AuthenticationError.js"
import {AuthorityAuthorized} from "./Authority.js"


interface Options {
  /** 
   * deafults to `false`
  */
  throw?: undefined | boolean
  /** 
   * Defaults to `true`
  */
  responde?: undefined | boolean
}



type A = [[{}, {}, {}], [{}, {}, {}]]

type Expectation<TUser extends object> = (
  Customize<
    Customize<A, [{auth: Authority<TUser>}, {}]>, [{}, {}]>
)
  
type Customization<TUser extends object, TThrow extends boolean> = (
  Customize<A, [
    (
      TThrow extends true 
      ? {auth: AuthorityAuthorized<TUser>}
      : {}
    ), 
    ({

    }),
  ]> 
)

function WithAuth<TUser extends object>(options: Options): Middleware<Expectation<TUser>> {
  const doThrow = options.throw ?? false
  const doResponde = options.responde ?? true
  

  return (request, response, proceed) => {
    let auth = request.auth
    let status: number | null = null
    let message: string | null = null
    let challenges: string[] = []

    if (auth.authenticated) {
      proceed()
      return 
    }

    for (let failure of auth.failures) {
      if (status === null && typeof failure.status === "number") {
        status = failure.status
      }

      if (message === null && typeof failure.message === "string" && failure.message.length) {
        message = failure.message
      }

      if (typeof failure.challenge === "string" && failure.challenge.length) {
        challenges.push(failure.challenge)
      }
    }

    if (status === null) {
      // Unauthorized
      status = 401
    }

    if (message === null) {
      message = STATUS_CODES[status] ?? "Unauthorized"
    }
    
    if (doResponde) {
      if (auth.failures.length > 0) {
        response.setHeader("WWW-Authenticate", challenges)
        response.status(status)
      } else {
        response.status(status)
      }
    }
    
    if (doThrow) {
      throw new AuthenticationError(message, status)
    } else {
      response.end(message)
      response.end(message)
    }
  }
}


export {WithAuth}
export default WithAuth