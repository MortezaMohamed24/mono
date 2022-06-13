interface Request {
  session: {
    user?: undefined | unknown
  }
}

interface Options {
  key?: string | undefined
  serializer?: Function | undefined
}


function SessionManager(options: Options) {
  const key = options.key || "authorizer"
  const serialize = options.serializer || (() => {})


  function authorize(request: Request, deserializedUser: unknown) {
    const serializedUser = serialize(deserializedUser, request)
    
    if (!request.session) {
      throw new Error("Could not find session on request")
    }

    if (!request.session[key]) {
      request.session[key] = {}
    }

    request.session[key].user = serializedUser
  }

  function deauthorize(request: Request) {
    if (!request.session) {
      throw new Error("Did not session on request")
    } else {
      delete request.session?.[key].user
    }
  }


  return {authorize, deauthorize}
}


export {SessionManager}
export default SessionManager