import {If} from "./If.js"
import {User} from "./Core.js"
import {fail} from "./Result.js"
import {pass} from "./Result.js"
import {Check} from "./Check.js"
import {State} from "./Core.js"
import {Method} from "./Method.js"
import {Result} from "./Result.js"
import {success} from "./Result.js"
import {Manager} from "./Manager/index.js"
import {Session} from "./Core.js"
import {Failure} from "./Failure.js"
import {redirect} from "./Result.js"
import {FailResult} from "./Result.js"
import {PassResult} from "./Result.js"
import {Serializer} from "./Core.js"
import {LocalMethod} from "./LocalMethod.js"
import {Deserializer} from "./Core.js"
import {SuccessResult} from "./Result.js"
import {SessionMethod} from "./SessionMethod.js"
import {RedirectResult} from "./Result.js"
import {AuthenticationError} from "./Error.js"


export {
  If,
  User,
  fail,
  pass,
  Check,
  State,
  Result,
  Method,
  Manager,
  success,
  Session,
  Failure,
  redirect,
  FailResult,
  PassResult,
  Serializer,
  LocalMethod,
  Deserializer,
  SessionMethod,
  SuccessResult,
  RedirectResult,
  AuthenticationError,
}


export default Object.freeze({
  If: If,
  Check: Check,
  Local: LocalMethod,
  Method: Method,
  Manager: Manager,
  Session: SessionMethod,
})