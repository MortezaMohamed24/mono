function initialize({useSession = false}: INITIALIZE.Options = {}): Middleware {
  return (request, response, proceed) => {
    let user: TUser | null = null
    let failures: Failure[] = []
    let authenticated: boolean = false


    function getUser() {
      return user  
    }

    function setUser(newUserData: TUser | null) {
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
    
    function saveUser(deserializedUser: TUser) {
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

      if (session[stateKey]) {
        return session[stateKey] as State
      }
      
      return session[stateKey] = {}
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

    function getAuthenticated() {
      return authenticated
    }

    function setAuthenticated(newValue: boolean) {
      return authenticated = newValue
    }
  

    define(requestKey, request, {
      user: {get: getUser, set: setUser},
      state: {get: getState},
      failuers: {get: getFailures},
      authenticated: {get: getAuthenticated, set: setAuthenticated},
    })


    proceed()
  }
}
