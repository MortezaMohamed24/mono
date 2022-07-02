import oid from "oid"
import save from "save"
import Board from "../Model.js"


async function deattach(this: Board): Promise<void> {
  const user = await this.user()

  oid.rem(user.idBoards, this.id)

  await save(this)
}


export {deattach}
export default deattach