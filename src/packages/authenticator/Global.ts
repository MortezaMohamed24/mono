import {Authority} from "./Authority.js"
import {Session} from "./Core.js"
import {REQUEST_KEY} from "./constants.js"


declare global {
  namespace Express {
    interface Request {
      session: Session
      [REQUEST_KEY]: Authority
    }
  }

  
  namespace Authenticator {
    interface User {

    }
  }
}