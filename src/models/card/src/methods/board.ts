import bd from "board/dist/crud.js"
import {Card} from "../Model.js"
import {Board} from "board"
import {ServerError} from "errors"


async function board(this: Card): Promise<Board> {
  const board = await bd.f(this.idBoard)

  if (board) {
    return board
  }

  throw new ServerError({
    status: 500,
    message: "card: coukd not find owner board",
  })
}


export {board}
export default board