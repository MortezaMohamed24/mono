import bd from "src/models/board/crud";
import Error from "#util/error";
import Checklist from "src/models/checklist";


async function board(this: Checklist) {
  const board = bd.f(this.idBoard);

  if (board) {
    return board;
  }

  throw new Error(500, "checklist: could not find owner board");
}


export default board;