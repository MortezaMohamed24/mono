import User from "../Model.js"
import types from "../fields/types.js"
import {pbkdf2Sync} from "node:crypto"
import {randomBytes} from "node:crypto"


export function setPassword(this: User, password: string): void {
  password = types.password(password, {strict: true})
  
  const salt = randomBytes(32).toString()
  const hash = pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex")
  
  this.password = {salt, hash}
}


export default setPassword