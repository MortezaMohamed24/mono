import save from "#models/util/save";
import Label from "#models/label";
import idUtil from "#models/util/idUtil";


async function deattach(this: Label) {
  const board = await this.board();

  idUtil.rem(board.idLabels, this.id);

  await save(this);
}


export default deattach;