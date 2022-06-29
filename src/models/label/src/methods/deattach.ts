import save from "src/models/util/save";
import Label from "src/models/label";
import idUtil from "src/models/util/idUtil";


async function deattach(this: Label) {
  const board = await this.board();

  idUtil.rem(board.idLabels, this.id);

  await save(this);
}


export default deattach;