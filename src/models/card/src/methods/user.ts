import ur from "user/crud.js"
import Card from "../Model.js"
import {ServerError} from "errors"


async function user(this: Card): Promise<User> {
  const user = await ur.f(this.idUser)

  if (user) {
    return user
  }

  throw new ServerError({
    status: 400, 
    message: "card: could not find owner user",
  })
}


export {user}
export default user