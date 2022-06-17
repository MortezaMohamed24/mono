import {URL} from "node:url"
import {User} from "./Core.js"
import {State} from "./Core.js"
import {define} from "./util/define.js"
import {Method} from "./Method.js"
import {Failure} from "./Authority.js"
import {Options} from "./Core.js"
import {isNoValue} from "./util/isNoValue.js"
import {STATE_KEY} from "./constants.js"
import {Middleware} from "./Core.js"
import {REQUEST_KEY} from "./constants.js"
import {SessionMethod} from "./SessionMethod.js"

import * as INITIALIZE from "./Initialize.js"
import * as AUTHENTICATE from "./Authenticate.js"



export function Authenticator(options: Options) {
  const methods = {...options.methods}
  const serializer = options.serializer
  const deserializer = options.deserializer


  function use(name: string, method: Method) {
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

  function initialize({useSession = false}: INITIALIZE.Options = {}): Middleware {
    return (inbound, outbound, proceed) => {
      let user: User | null = null
      let authenticated: boolean = false


      function getUser() {
        return user  
      }
  
      function setUser(newUserData: User | null) {
        if (isNoValue(newUserData)) {
          user = null
        
          if (useSession) {
            unsaveUser()
          }

          return
        } 
        
        user = newUserData

        if (useSession) {
          saveUser(newUserData)
        }
      }
      
      function saveUser(deserializedUser: User) {
        const state = getState()
  
        try {
          state.user = serializer(deserializedUser)
        } catch (error) {
          delete state.user
          throw error
        }
      }
  
      function getState(): State {
        const session = getSession()

        if (session[STATE_KEY]) {
          return session[STATE_KEY] as State
        }
        
        return session[STATE_KEY] = {}
      }

      function getSession() {
        if (inbound.session) {
          return inbound.session
        } else {
          throw new Error("Could not find a session object on reqeuest. Did you forgot to write \"app.use(session(options))\"")
        }
      }
      
      function unsaveUser() {
        delete getState().user
      }
  
      function getAuthenticated() {
        return authenticated
      }
  
      function setAuthenticated(newValue: boolean) {
        return authenticated = newValue
      }
    

      define(REQUEST_KEY, inbound, {
        user: {get: getUser, set: setUser},
        state: {get: getState},
        authenticated: {get: getAuthenticated, set: setAuthenticated},
      })
  
  
      proceed()
    }
  }

  function authenticate({methods}: AUTHENTICATE.Options): Middleware {
    return async (inbound, outbound, proceed) => {
      const failures: Failure[] = []
      const authority = inbound[REQUEST_KEY]


      for (let name of methods) {
        const authStatus = await getMethod(name)(inbound)
      

        switch (authStatus.type) {
          case "pass": 
            proceed()
            return
            
          case "fail": 
            failures.push({
              status: authStatus.status,
              message: authStatus.message,
              challenge: authStatus.challenge,
            })
            continue

          case "success": 
            authority.user = authStatus.user
            authority.failures = []
            authority.authenticated = true
            proceed()
            return
          
          case "redirect": 
            outbound.setHeader("Location", authStatus.url instanceof URL ? authStatus.url.href : authStatus.url)
            outbound.setHeader("Content-Length", "0")
            outbound.status(authStatus.status ?? 302)
            outbound.end()
            return authStatus
        }
      }


      authority.user = null
      authority.failures = failures
      authority.authenticated = false
    }
  }

  

  use("session", SessionMethod({deserializer}))



  return {
    use, 
    unuse, 
    session, 
    initialize, 
    authenticate,
  }
}


export default Authenticator