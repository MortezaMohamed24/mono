import List from "../Model.js"
import save from "save"
import oid from "oid"


async function shift(this: List, index: number = Infinity) {
  const board = await this.board()

  oid.move(board.idLists, this.id, index)

  await save(board)
}


export {shift}
export default shift