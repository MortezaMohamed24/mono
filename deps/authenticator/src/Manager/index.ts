import {Key} from "../Core.js"
import {User} from "../Core.js"
import {State} from "../Core.js"
import {Failure} from "../Failure.js"
import {Options} from "./typings.js"
import {isNoValue} from "src/util/isNoValue.js"
import {Middleware} from "./typings.js"


export function Manager<TUser extends User, TKRequest extends Key, TKSession extends Key>(options: Options<TUser, TKRequest, TKSession>): Middleware<TUser, TKRequest, TKSession> {
  let kRequest = options.kRequest
  let kSession = options.kSession
  let serialize = options.serialize ?? String
  let useSession = options.useSession ?? false


  return async (request, response, proceed) => {
    class Manager {
      #user: TUser | null = null
      #status: number | null = null
      #method: string | null = null
      #message: string | null = null
      #failures: Failure[] = []
      #challenges: string[] = []
      #authenticated: boolean = false
    
    
      get user() {
        return this.#user
      }
    
      set user(value: TUser | null) {
        if (isNoValue(value)) {
          this.#user = null
          this.#unsaveUser()
        } else {
          this.#user = value
          this.#saveUser(this.#user)
        }
      }
    
      get state(): State {
        const session = this.session
        const state = (session as any)[kSession]
    
        if (state) {
          return state
        }
        
        return (session as any)[kSession] = {}
      }
      
      get status() {
        return this.#status
      }
    
      set status(value: number | null) {
        this.#status = value
      }

      get method() {
        return this.#method
      }

      set method(v: string | null) {
        this.#method = v
      }
    
      get session() {
        if (request.session) {
          return request.session
        } else {
          throw new Error("Could not find a session object on reqeuest. Did you forgot to write \"app.use(session(options))\"")
        }
      }
    
      get message() {
        return this.#message
      }
    
      set message(value: string | null) {
        this.#message = value
      }
    
      get chalenges() {
        return this.#challenges
      }
    
      set chalenges(value: string[]) {
        this.#challenges = value
      }
    
      get failures() {
        return this.#failures
      }
    
      set failures(value: Failure[]) {
        this.#failures = value 
      }
    
      get authenticated() {
        return this.#authenticated
      }
    
      set authenticated(value: boolean) {
        this.#authenticated = value
      }
      
      
      #saveUser(user: TUser) {
        if (!useSession) {
          return
        }
    
        const state = this.state
    
        try {
          state.user = serialize(user)
        } catch (error) {
          delete state.user
          throw error
        }
      }
    
      #unsaveUser() {
        if (useSession) {
          delete this.state.user
        }
      }
    }


    Object.defineProperty(request, kRequest, {
      value: new Manager(),
      writable: false,
      configurable: false,
    })

   
    proceed() 
  }
}


export default Manager