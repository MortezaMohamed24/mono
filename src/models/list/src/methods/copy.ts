import List from "../Model.js"
import Board from "board"


interface Argument {
  title?: string | undefined
  index?: number | undefined
  board: Board
  keepCards?: boolean | undefined
}

async function copy(this: List, arg: Argument) {
  const copy = await this.copySelf(arg)
  const keepCards = arg.keepCards ?? true

  if (keepCards) {
    await this.copyAllOwnCards(copy)
  }

  return copy
}


export {copy}
export default copy