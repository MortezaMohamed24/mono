import oid from "oid"
import save from "save"
import Label from "label"


async function deattach(this: Label): Promise<void> {
  const board = await this.board()

  oid.rem(board.idLabels, this.id)

  await save(this)
}


export {deattach}
export default deattach