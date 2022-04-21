import save from "#models/util/save";
import Board from "#models/board";
import Label from "#models/label";
import idUtil from "#models/util/idUtil";


async function attach(this: Label, board: Board, index: number = Infinity) {
  this.idUser = board.idUser;
  this.idBoard = board.id;

  idUtil.add(board.idLabels, this.id, index);

  await save(this, board);
}


export default attach;