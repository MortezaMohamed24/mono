import List from "../Model.js"
import Board from "board"
import FBLRFC from "label/dist/util/fixBrokenLabelReferencesForCards.js"


async function move(this: List, board: Board, index = Infinity): Promise<void> {
  if (board.id.equals(this.idBoard)) {
    await this.shift(index)
  } else {
    await this.deattach()
    await this.attach(board, index)
    await FBLRFC(await this.cards())
  }
}


export {move}
export default move