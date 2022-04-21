import ur from "#models/user/crud";
import List from "#models/list";


async function user(this: List) {
  const user = ur.f(this.idUser);

  if (user) {
    return user;
  }

  throw new Error("list: could not find owner user");
}


export {user};
export default user;