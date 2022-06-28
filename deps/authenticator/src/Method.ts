import {URL} from "node:url"
import {User} from "src/Core.js"
import {Result} from "./Result.js"
import {Proceed} from "express"
import {Request} from "express"
import {Response} from "express"
import {getManager} from "./util/getManager.js"


export type Method<TUser extends User, TRequest extends Request> = (
  (request: TRequest) => (
    | Result<TUser>
    | Promise<Result<TUser>>
  )
)

export function Method<TUser extends User, TRequest extends Request>(name: string, method: Method<TUser, TRequest>) {
  return async (request: TRequest, response: Response, proceed: Proceed) => {
    const manager = getManager(request)

    if (manager.authenticated) {
      return
    }

    const result = await method(request)
    
    switch (result.type) {
      case "pass":
        proceed()
        return
        
      case "fail": 
        manager.failures.push({
          status: result.status,
          message: result.message,
          challenge: result.challenge,
        })
        proceed()
        return

      case "success": 
        manager.user = result.user
        manager.method = name
        manager.failures = []
        manager.authenticated = true
        proceed()
        return
      
      case "redirect": 
        response.setHeader("Location", result.url instanceof URL ? result.url.href : result.url)
        response.setHeader("Content-Length", "0")
        response.status(result.status ?? 302)
        response.end()
        return
    }
  }
}