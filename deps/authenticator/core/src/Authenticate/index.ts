function authenticate({methods}: AUTHENTICATE.Options): AUTHENTICATE.Middleware<TUser, TRequestKey> {
  return async (request, response, proceed) => {
    const failures: Failure[] = []
    const authority = request[requestKey]


    for (let name of methods) {
      const authStatus = await getMethod(name)(request)
    

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
          response.setHeader("Location", authStatus.url instanceof URL ? authStatus.url.href : authStatus.url)
          response.setHeader("Content-Length", "0")
          response.status(authStatus.status ?? 302)
          response.end()
          return authStatus
      }
    }


    authority.user = null
    authority.failures = failures
    authority.authenticated = false
  }
}