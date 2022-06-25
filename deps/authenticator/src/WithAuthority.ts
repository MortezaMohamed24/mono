import {Middleware} from "./Core.js"
import {STATUS_CODES} from "node:http"
import {AuthenticationError} from "./AuthenticationError.js"


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

function WithAuth(options: Options): Middleware {
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
        response.end(message)
      } else {
        response.status(status)
        response.end(message)
      }
    }

    if (doThrow) {
      throw new AuthenticationError(message, status)
    }
  }
}


export {WithAuth}
export default WithAuth