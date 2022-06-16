import {pass} from "./AuthenticationStatus.js"
import {Method} from "./Method.js"
import {isNoValue} from "./util/isNoValue.js"
import {Deserializer} from "./Core.js"


export interface Options {
  deserializer: Deserializer
}

export function SessionMethod({deserializer}: Options): Method {
  return async (inbound) =>  {
    const auth = inbound.auth
    const state = auth.state


    /** 
     * if there is no user in the session, let the next method does the authentication.
    */
    if (isNoValue(state.user)) {
      return pass()
    } 
    
    if (typeof state.user !== "string") {
      throw new TypeError(`expected authority.state.user to be a string, but it was of type ${typeof state.user}`)
    } 
    
    const deserializedUser = await deserializer(state.user)

    /** 
     * the serializer returning null or undefined means we should remove the user from the session 
    */
    if (isNoValue(deserializedUser)) {
      delete state.user
      auth.user = null
    } else {
      auth.user = deserializedUser
    }
  
  
    return pass()
  }
}


export default SessionMethod