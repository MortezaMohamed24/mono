import {User} from "../Core.js"
import {Request} from "express"
import {REQUEST_KEY} from "../constants.js"
import {ManagerUnresolved} from "../Manager/typings.js"


export function getManager<TUser extends User>(request: Request): ManagerUnresolved<TUser> {
  const manager = request[REQUEST_KEY]

  if (!manager) {
    throw new Error("Auth: Manager has not been initialized")
  }
  
  return manager
}


export default getManager