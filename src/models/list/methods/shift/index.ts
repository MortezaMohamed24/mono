import List from "src/models/list";
import save from "src/models/util/save";
import idUtil from "src/models/util/idUtil";


async function shift(this: List, index: number = Infinity) {
  const board = await this.board();

  idUtil.move(board.idLists, this.id, index);

  await save(board);
}


export {shift};
export default shift;