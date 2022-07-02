import ur from "user/crud.js"
import User from "user"
import Label from "label"
import {ServerError} from "errors"


async function user(this: Label): Promise<User> {
  const user = await ur.f(this.idUser)

  if (user) {
    return user
  }

  throw new ServerError({
    status: 500,
    message: "label: could not find owner user",
  })
}


export {user}
export default user