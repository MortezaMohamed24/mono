import bd from "board/crud.js"
import Board from "board/Model.js"
import Checkitem from "../Model.js"


async function board(this: Checkitem): Promise<Board> {
  const board = await bd.f(this.idBoard)

  if (board) {
    return board
  }

  throw new Error("checkitem: could not find owner board")
}


export default board