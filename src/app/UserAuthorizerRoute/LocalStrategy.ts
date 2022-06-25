import {Request, Response} from "src/packages/express/express"
// import session from ""


interface AuthInfo {
  username: string
  password: string
}

interface AuthInfoExtracter {
  (request: Request, response: Response): AuthInfo
}


function LocalAuthorizationStrategy(extract_auth_info: AuthInfoExtracter) {
  return (request: Request, response: Response) => {
    const info = extract_auth_info(request, response)
    const session = request.session
    
    request.ses
    if ((session as any).userId) {
      
    }
  }
}

type AAA = session.SessionData

const g: AAA = {
  userID
}