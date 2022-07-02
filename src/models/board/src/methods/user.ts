import ur from "user/crud.js"
import User from "user"
import Board from "../Model.js"
import {ServerError} from "errors"


async function user(this: Board): Promise<User> {
  const user = await ur.f(this.idUser)

  if (user) {
    return user
  }

  throw new ServerError({
    status: 500,
    message: "board: could not find owner user",
  })
}


export default user