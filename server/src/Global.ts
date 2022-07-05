import {User} from "./models/User/User.js"
import {ManagerUnresolved} from "authenticator"


declare global {
  export namespace Express {
    export interface Request {
      AUTH: ManagerUnresolved<User>
    }
  }
}