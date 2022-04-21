import List from "#models/list";
import save from "#models/util/save";
import idUtil from "#models/util/idUtil";


async function deattach(this: List) {
  const board = await this.board();

  idUtil.rem(board.idLists, this.id);

  await save(board);
}


export default deattach;