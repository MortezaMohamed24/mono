import bd from "board/crud.js"
import Board from "board"
import Checklist from "../Model.js"
import {ServerError} from "errors"


async function board(this: Checklist): Promise<Board> {
  const board = bd.f(this.idBoard)

  if (board) {
    return board
  }

  throw new ServerError({
    status: 500, 
    message: "checklist: could not find owner board",
  })
}


export default board