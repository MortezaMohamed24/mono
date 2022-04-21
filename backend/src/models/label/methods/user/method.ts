import ur from "#models/user/crud";
import Label from "#models/label";


async function user(this: Label) {
  const user = await ur.f(this.idUser);

  if (user) {
    return user;
  }

  throw new Error("label: could not find owner user");
}


export default user;