import {Request} from "express"
import * as AUTHENTICATOR from "authenticator"
import {pass} from "authenticator"
import {fail} from "authenticator"
// import {Config} from "authentic/ator"
import {Method} from "authenticator"


type Verify = {
  (inbound: Request): VerifyReturn
}

type VerifyReturn = (
  | AUTHENTICATOR.User
  | Promise<AUTHENTICATOR.User>
)


function LocalMethod(verify: Verify): Method {  
  return async (request) => {
    const user = await verify(request)


    if (user) {
      return AUTHENTICATOR.success(user)
    }
    

    return pass()
  }
}