import ur from "#models/user/crud";
import Board from "#models/board";


async function user(this: Board) {
  const user = await ur.f(this.idUser);

  if (user) {
    return user;
  }

  throw new Error("board: could not find owner user");
}


export default user;