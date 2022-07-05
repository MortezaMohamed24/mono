import {State} from "../Core.js"
import {Failure} from "../Failure.js"
import {isNoValue} from "../util/isNoValue.js"
import {Serializer} from "../Core.js"


export class ManagerClass<TUser extends object> {
  #user: TUser | null = null
  #status: number | null = null
  #method: string | null = null
  #message: string | null = null
  #session: Record<string, any>
  #kSession: string = "__AUTH__"
  #failures: Failure[] = []
  #serialize: Serializer<TUser>
  #challenges: string[] = []
  #authenticated: boolean = false


  constructor(session: object, serializer: Serializer<TUser>) {
    this.#session = session
    this.#serialize = serializer
  }
  

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
    const state = session[this.#kSession]

    if (state) {
      return state
    }
    
    return session[this.#kSession] = {}
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
    return this.#session
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
    const state = this.state

    try {
      state.user = this.#serialize(user)
    } catch (error) {
      delete state.user
      throw error
    }
  }

  #unsaveUser() {
    delete this.state.user
  }
}


export default ManagerClass