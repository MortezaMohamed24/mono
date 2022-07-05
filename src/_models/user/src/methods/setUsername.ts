import ur from "../crud.js"
import User from "../Model.js"
import types from "../fields/types.js"
import {ServerError} from "errors"
import {UNAVAILABLE_USERNAME} from "../errors.js"


export async function setUsername(this: User, username: string): Promise<void> {
  if (await ur.h({username})) {
    throw new ServerError({
      status: 400, 
      message: UNAVAILABLE_USERNAME,
    })
  }

  this.username = types.username(username, {strict: true})
}


export default setUsername