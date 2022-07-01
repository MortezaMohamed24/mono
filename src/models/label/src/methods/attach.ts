import oid from "oid"
import save from "save"
import Board from "board"
import Label from "../Model.js"


async function attach(this: Label, board: Board, index: number = Infinity): Promise<void> {
  this.idUser = board.idUser
  this.idBoard = board.id

  oid.add(board.idLabels, this.id, index)

  await save(this, board)
}


export {attach}
export default attach