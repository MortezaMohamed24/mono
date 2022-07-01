import ur from "user/dist/crud.js"
import User from "user"
import {Checklist} from "../Model.js"
import {ServerError} from "errors"


async function user(this: Checklist): Promise<User> {
  const user = await ur.f(this.idUser)

  if (user) {
    return user
  }

  throw new ServerError({
    status: 500, 
    message: "checklist: could not find owner user",
  })
}


export default user