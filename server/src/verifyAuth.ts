import User from "./models/User/User.js"
import {LocalMethodVerifyReturn} from "authenticator"


function verifyAuth(username: string, password: string) {
  const user = User.items.find(user => user.username === username)

  console.log({
    username,
    password,
  }, user?.password)

  if (!user) {
    return LocalMethodVerifyReturn.UNKNOWN_USER
  }

  if (user.password !== password) {
    return LocalMethodVerifyReturn.INCORRECT_PASSWPRD
  }

  return user
}




export {verifyAuth}
export default verifyAuth