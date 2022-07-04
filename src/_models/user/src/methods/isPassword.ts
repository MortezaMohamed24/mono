import User from "../Model.js"
import {pbkdf2Sync} from "node:crypto"


export function isPassword(this: User, password: string): boolean {
  const {salt, hash} = this.password
  return pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex") === hash
}


export default isPassword