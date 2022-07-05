import {pass} from "./Result.js"
import {User} from "./Core.js"
import {Method} from "./Method.js"
import {success} from "./Result.js"
import {isNoValue} from "./util/isNoValue.js"
import {getManager} from "./util/getManager.js"
import {Deserializer} from "./Core.js"


export function SessionMethod<TUser extends User>(deserialize: Deserializer<TUser>) {
  return Method<TUser>("session", async (request) =>  {
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
      return pass()
    } 

    return success(deserializedUser)
  })
}


export default SessionMethod