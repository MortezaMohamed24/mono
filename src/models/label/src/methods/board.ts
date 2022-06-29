import bd from "src/models/board/crud";
import Label from "src/models/label";


async function board(this: Label) {
  const board = await bd.f(this.idBoard);

  if (board) {
    return board;
  }

  throw new Error("label: could not find owner user");
}


export default board;