import oid from "oid"
import List from "../Model.js"
import save from "save"


async function deattach(this: List): Promise<void> {
  const board = await this.board()

  oid.rem(board.idLists, this.id)

  await save(board)
}


export {deattach}
export default deattach