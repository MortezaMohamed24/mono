import {Middleware} from "express"
import {getManager} from "./util/getManager.js"
import {STATUS_CODES} from "node:http"
import {AuthenticationError} from "./Error.js"


export type Options = {
  action?: undefined | "throw" | "responde"
}

export function Check({action = "throw"}: Options = {}): Middleware {
  return (request, response, proceed) => {
    const manager = getManager(request)

    if (manager.authenticated) {
      proceed()
      return
    }

    manager.user = null
    manager.method = null
    manager.authenticated = false
  
    let status: number | null = null
    let message: string | null = null
    let challenges: string[] = []

    for (let failure of manager.failures) {
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
    
    if (challenges.length) {
      response.setHeader("WWW-Authenticate", challenges.join(", "))
    }

    response.status(status)

    if (action === "throw") {
      throw new AuthenticationError(message, status); 
    } else if (action === "responde") {
      response.send(message)
    }
  }
}


export default Check