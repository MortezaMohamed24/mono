import List from "src/models/list";
import save from "src/models/util/save";
import idUtil from "src/models/util/idUtil";


async function deattach(this: List) {
  const board = await this.board();

  idUtil.rem(board.idLists, this.id);

  await save(board);
}


export default deattach;