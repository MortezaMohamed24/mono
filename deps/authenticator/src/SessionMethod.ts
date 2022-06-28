import {pass} from "./Result.js"
import {User} from "./Core.js"
import {Method} from "./Method.js"
import {Request} from "express"
import {isNoValue} from "./util/isNoValue.js"
import {getManager} from "./util/getManager.js"
import {Deserializer} from "./Core.js"


export interface Options<TUser extends User> {
  deserialize: Deserializer<TUser>
}

export function SessionMethod<TUser extends User>({deserialize}: Options<TUser>) {
  return Method<TUser, Request>("session", async (request) =>  {
    const manager = getManager(request)
    const state = manager.state


    /** 
     * if there is no user in the session, do nothing.
    */
    if (isNoValue(state.user)) {
      return pass()
    } 
    
    if (typeof state.user !== "string") {
      throw new TypeError(`expected authority.state.user to be a string, but it was of type ${typeof state.user}`)
    } 
    
    const deserializedUser = await deserialize(state.user)

    /** 
     * the serializer returning null or undefined means we should remove the user from the session 
    */
    if (isNoValue(deserializedUser)) {
      delete state.user
      manager.user = null
    } else {
      manager.user = deserializedUser
    }
  
  
    return pass()
  })
}


export default SessionMethod