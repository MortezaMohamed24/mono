import {bd} from "board"
import {Board} from "board"
import {Checkitem} from "../Model.js"
import {ServerError} from "errors"


async function board(this: Checkitem): Promise<Board> {
  const board = await bd.f(this.idBoard)

  if (board) {
    return board
  }

  throw new ServerError({
    status: 500,
    message: "checkitem: could not find owner board",
  })
}


export {board}
export default board