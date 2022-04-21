import bd from "#models/board/crud";
import List from "#models/list";


async function board(this: List) {
  const board = await bd.f(this.idBoard);

  if (board) {
    return board;
  }

  throw new Error("list: could not find owner board");
}


export default board;