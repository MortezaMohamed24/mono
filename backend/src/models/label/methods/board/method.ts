import bd from "#models/board/crud";
import Label from "#models/label";


async function board(this: Label) {
  const board = await bd.f(this.idBoard);

  if (board) {
    return board;
  }

  throw new Error("label: could not find owner user");
}


export default board;