import {Middleware} from "./Core.js"
import {AuthenticationError} from "./AuthenticationError.js"


interface Options {
  throw: boolean
}

function SendAuthenticationFailureResponse(options: Options): Middleware {
  return (inbound, outbound, proceed) => {
    const authority = inbound.auth

    if (authority.authenticated) {
      return 
    }

    // get the first status
    const status = authority.failures.find(failure => failure.status)?.status ?? 401
    // get all challenges
    const challenges = authority.failures.map(failure => failure.challenge).join(", ")
  
    
    if (authority.failures.length > 0) {
      outbound.setHeader("WWW-Authenticate", challenges)
    } 
    
    outbound.status(status)
    outbound.end("Unauthorized")

    if (options.throw) {
      throw new AuthenticationError(challenges, status)
    }
  }
}


export {SendAuthenticationFailureResponse}
export default SendAuthenticationFailureResponse