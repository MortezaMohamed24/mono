import ur from "#models/user/crud";
import Checkitem from "#models/checkitem";


async function user(this: Checkitem) {
  const user = await ur.f(this.idUser);

  if (user) {
    return user;
  }

  throw new Error("checkitem: could not find owner user");
}


export default user;