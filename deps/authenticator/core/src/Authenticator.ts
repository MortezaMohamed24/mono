import {URL} from "node:url"
import {Key} from "./Core.js"
import {State} from "./Core.js"
import {define} from "./util/define.js"
import {Method} from "./Method.js"
import {Failure} from "./Failure.js"
import {Options} from "./Core.js"
import {isNoValue} from "./util/isNoValue.js"
import {Middleware} from "./Core.js"
import {SessionMethod} from "./SessionMethod.js"

import * as INITIALIZE from "./Initialize.js"
import * as AUTHENTICATE from "./Authenticate.js"



export function Authenticator<TUser extends object, TRequestKey extends Key, TSessionKey extends Key>(options: Options<TUser, TRequestKey, TSessionKey>) {
  const methods = {...options.methods}
  const stateKey = options.sessionkey
  const requestKey = options.requestKey
  const serializer = options.serializer
  const deserializer = options.deserializer


  function use(name: string, method: Method<TUser>) {
    methods[name] = method
  }

  function unuse(name: string) {
    delete methods[name]
  }

  function session() {
    return authenticate({methods: ["local"]})
  }
  
  function getMethod(name: string) {
    const method = methods[name]

    if (method) {
      return method
    }

    throw new Error(
      `Could not authenticate because method "${name}" is missing,` +
      ` did you forgot to write authenticator.use(${name}()).`
    )
  }
  

  use("session", SessionMethod({deserializer}))



  return {
    use, 
    unuse, 
    session, 
  }
}


export default Authenticator