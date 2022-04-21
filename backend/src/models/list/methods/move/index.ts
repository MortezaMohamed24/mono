import List from "#models/list";
import Board from "#models/board";
import FBLRFC from "#models/util/fixBrokenLabelReferencesForCards";


async function move(this: List, board: Board, index = Infinity) {
  if (board.id.equals(this.idBoard)) {
    await this.shift(index);
  } else {
    await this.deattach();
    await this.attach(board, index);
    await FBLRFC(await this.cards());
  }
}


export {move};
export default move;