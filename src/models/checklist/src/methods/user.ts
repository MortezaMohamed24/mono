import ur from "src/models/user/crud";
import Error from "#util/error";
import Checklist from "src/models/checklist";


async function user(this: Checklist) {
  const user = await ur.f(this.idUser);

  if (user) {
    return user;
  }

  throw new Error(500, "checklist: could not find owner user")
}


export default user;