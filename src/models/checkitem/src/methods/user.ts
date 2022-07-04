import {ur} from "user"
import {User} from "user"
import {Checkitem} from "../Model.js"


async function user(this: Checkitem): Promise<User> {
  const user = await ur.f(this.idUser)

  if (user) {
    return user
  }

  throw new Error("checkitem: could not find owner user")
}


export {user}
export default user