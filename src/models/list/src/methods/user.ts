import ur from "user/crud.js"
import List from "../Model.js"
import User from "user"
import {ServerError} from "errors"


async function user(this: List): Promise<User> {
  const user = ur.f(this.idUser)

  if (user) {
    return user
  }

  throw new ServerError({
    status: "list: could not find owner user",
    message: "list: could not find owner user",
  })
}


export {user}
export default user