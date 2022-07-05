import oid from "oid"
import save from "save"
import List from "../Model.js"


async function shift(this: List, index: number = Infinity) {
  const board = await this.board()

  oid.move(board.idLists, this.id, index)

  await save(board)
}


export {shift}
export default shift