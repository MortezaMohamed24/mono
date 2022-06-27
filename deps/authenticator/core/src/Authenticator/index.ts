import {URL} from "node:url"
import {Key} from "../Core.js"
import {State} from "../Core.js"
import {User} from "../Core.js"
import {define} from "../util/define.js"
import {Failure} from "../Failure.js"
import {Options} from "./typings.js"
import {isNoValue} from "src/util/isNoValue.js"
import {Middleware} from "./typings.js"
import {STATUS_CODES} from "node:http"
import {SessionMethod} from "../SessionMethod.js"
import {AuthenticationError} from "../AuthenticationError.js"


export function Auth<TUser extends User, TKRequest extends Key, TKResponse extends Key>(options: Options<TUser, TKRequest, TKResponse>): Middleware<TUser, TKRequest> {
  let methods = options.methods ? [...options.methods] : []
  let kRequest = options.kRequest ?? "AUTH"
  let kSession = options.kSession ?? "__AUTH__"
  let serialize = options.serialize
  let deserialize = options.deserialize


  methods.push(SessionMethod({
    deserialize,
  }))


  return async (request, response, proceed) => {
    let user: TUser | null = null
    let status: number | null = null
    let message: string | null = null
    let failures: Failure[] = []
    let challenges: string[] = []
    let authenticated: boolean = false

    
    // ---------------------------------------------

    function getUser() {
      return user
    }

    function setUser(value: TUser | null) {
      if (isNoValue(value)) {
        user = null
        unsaveUser()
      } else {
        saveUser(user = value)
      }
    }

    function saveUser(user: TUser) {
      const state = getState()

      try {
        state.user = serialize(user)
      } catch (error) {
        delete state.user
        throw error
      }
    }

    function getState(): State {
      const session = getSession()
      const state = (session as any)[kSession]

      if (state) {
        return state
      }
      
      return (session as any)[kSession] = {}
    }
    
    function getSession() {
      if (request.session) {
        return request.session
      } else {
        throw new Error("Could not find a session object on reqeuest. Did you forgot to write \"app.use(session(options))\"")
      }
    }
    
    function unsaveUser() {
      delete getState().user
    }

    function getFailures() {
      return failures
    }

    function setFailures(value: Failure[] | null) {
      if (value === null) {
        failures = []
      } else {
        failures = value 
      }
    }

    function getAuthenticated() {
      return authenticated
    }

    function setAuthenticated(value: boolean) {
      authenticated = value
    }
    
    // ---------------------------------------------
    
    define(request, kRequest, [
      ["user", "getter", getUser],
      ["user", "setter", setUser],
      ["failures", "getter", getFailures],
      ["failures", "setter", setFailures],
      ["authenticated", "getter", getAuthenticated],
      ["authenticated", "setter", setAuthenticated],
    ])

    // ---------------------------------------------

    for (let method of methods) {
      const result = await method(request)
    
      switch (result.type) {
        case "pass": 
          proceed()
          return
          
        case "fail": 
          failures.push({
            status: result.status,
            message: result.message,
            challenge: result.challenge,
          })
          continue
  
        case "success": 
          user = result.user
          failures = []
          authenticated = true
          proceed()
          return
        
        case "redirect": 
          response.setHeader("Location", result.url instanceof URL ? result.url.href : result.url)
          response.setHeader("Content-Length", "0")
          response.status(result.status ?? 302)
          response.end()
          return
      }
    }

    // ---------------------------------------------

    setUser(null)
    setAuthenticated(false)


    for (let failure of failures) {
      if (status === null && typeof failure.status === "number") {
        status = failure.status
      }
  
      if (message === null && typeof failure.message === "string" && failure.message.length) {
        message = failure.message
      }
  
      if (typeof failure.challenge === "string" && failure.challenge.length) {
        challenges.push(failure.challenge)
      }
    }

    if (status === null) {
      // Unauthorized
      status = 401
    }
  
    if (message === null) {
      message = STATUS_CODES[status] ?? "Unauthorized"
    }
    
    if (failures.length) {
      response.setHeader("WWW-Authenticate", challenges)
    }

    
    response.status(status)
    throw new AuthenticationError(message, status); 
  }
}


export default Auth