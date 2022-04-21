import v from "#models/user/fields/validators";
import ur from "#models/user/crud";
import User from "#models/user";
import Error from "#util/error";
import {UNAVAILABLE_USERNAME} from "#models/user/errors";


async function setUsername(this: User, username: string) {
  if (await ur.h({username})) {
    throw new Error(400, UNAVAILABLE_USERNAME);
  } else {
    this.username = v.username(username);
  }
}


export default setUsername;