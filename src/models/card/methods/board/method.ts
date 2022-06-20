import bd from "src/models/board/crud";
import Card from "src/models/card";


async function board(this: Card) {
  const board = await bd.f(this.idBoard);

  if (board) {
    return board;
  }

  throw new Error("card: coukd not find owner board");
}


export default board;