import pause from "pause"
import {isNoValue} from "./util/isNoValue.js"
import {Strategy} from "./Strategy"
import AuthenticatorFlowControl from "./AuthenticatorFlowControl.js"



interface FactoryArgument {
  /** 
   * The key where the user data is in `request.session`
  */
  key: string
  /**
  * A function to deserialize the user data out of `request.session[this.key]`
  */
  deserializer: Function
  /** 
   * Defaults to `false`
  */
   pauseStream?: undefined | boolean
}

const SessionStrategy = ({key, deserializer, pauseStream = false}: FactoryArgument): Strategy => ({request}) =>  {
  const serializedUser = request.session?.[key].user

  
  if (isNoValue(serializedUser)) {
    return AuthenticatorFlowControl.pass()
  } 
  
  // NOTE: Stream pausing is desirable in the case where later middleware is
  //       listening for events emitted from request.  For discussion on the
  //       matter, refer to: https://github.com/jaredhanson/passport/pull/106
  const streamHandler = pauseStream && pause(request)


  let deserializedUser

  try {
    deserializedUser = deserializer({request, serializedUser})
  } catch (error) {
    return AuthenticatorFlowControl.error(error)
  }

  if (isNoValue(deserializedUser)) {
    delete request.session[key].user
  } else {
    // TODO: Compltet Rewriting This 
    var property = request._userProperty || "user"
    request[property] = user
  }


  streamHandler?.resume()


  return AuthenticatorFlowControl.pass()
}


export {SessionStrategy}
export default SessionStrategy