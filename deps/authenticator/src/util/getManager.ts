import {User} from "../Core.js"
import {Request} from "express"
import {Manager} from "../Manager/typings.js"
import {K_REQUEST} from "../constants.js"


export function isKey(v: unknown): v is string | number | symbol {
  return ["string", "symbol", "number"].includes(typeof v)
}

export function getManager<TUser extends User>(request: Request): Manager<TUser> {
  const req = request as any
  const key = req[K_REQUEST]

  if (!isKey(key)) {
    throw new Error("Auth: Manager has not been initialized yet, did you forgot to call \"app.use(Auth.Manager())\"")
  }

  const manager = req[key]

  if (!manager) {
    throw new Error("Auth: Manager has been initialized, but not found at " + String(key))
  }
  
  return manager
}


export default getManager