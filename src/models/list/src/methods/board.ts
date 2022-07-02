import bd from "board/dist/crud.js"
import List from "../Model.js"
import {ServerError} from "errors"


async function board(this: List): Promise<Board> {
  const board = await bd.f(this.idBoard)

  if (board) {
    return board
  }

  throw new ServerError({
    status: 500,
    message: "list: could not find owner board",
  })
}


export {board}
export default board