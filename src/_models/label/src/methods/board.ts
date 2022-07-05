import bd from "board/crud.js"
import Board from "board"
import Label from "label"


async function board(this: Label): Promise<Board> {
  const board = await bd.f(this.idBoard)

  if (board) {
    return board
  }

  throw new Error("label: could not find owner user")
}


export {board}
export default board