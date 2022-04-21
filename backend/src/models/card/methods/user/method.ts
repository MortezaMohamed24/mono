import ur from "#models/user/crud";
import Card from "#models/card";
import Error from "#util/error";


async function user(this: Card) {
  const user = await ur.f(this.idUser);

  if (user) {
    return user;
  }

  throw new Error(400, "card: could not find owner user");
}


export default user;