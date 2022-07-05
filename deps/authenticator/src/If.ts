import {getManager} from "./util/getManager.js"


export type Method = (
  | string 
  | RegExp
)

export function If(method: Method, callback: Function) {
  const pattern = typeof method === "string" ? new RegExp(method) : method

  return async (request, response, proceed) => {
    const manager = getManager(request)

    if (manager.authenticated) {
      return
    }

    if (!manager.method) {
      return
    }
    
    if (pattern.test(manager.method)) {
      await callback(request, response, proceed)
    }
  }
}


export default If