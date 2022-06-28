import {Proceed} from "express"
import {Request} from "express"
import {Response} from "express"
import {getManager} from "./util/getManager"


export type Callback<TRequest extends Request, TResponse extends Response> = {
  (
    request: TRequest,
    response: TResponse,
    proceed: Proceed,
  ): (
    | void 
    | Promise<void>
  )
}

export type Method = (
  | string 
  | RegExp
)


export function If<TRequest extends Request, TResponse extends Response>(method: Method, callback: Callback<TRequest, TResponse>) {
  const pattern = typeof method === "string" ? new RegExp(method) : method

  return async (request: TRequest, response: TResponse, proceed: Proceed) => {
    const manager = getManager(request)

    if (manager.authenticated) {
      return
    }

    if (pattern.test(manager.method)) {
      await callback(request, response, proceed)
    }
  }
}


export default If