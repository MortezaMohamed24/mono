import bd from "src/models/board/crud";
import Checkitem from "src/models/checkitem";


async function board(this: Checkitem) {
  const board = await bd.f(this.idBoard);

  if (board) {
    return board;
  }

  throw new Error("checkitem: could not find owner board");
}


export default board;