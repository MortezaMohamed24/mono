import rem from "src/models/util/idUtil/rem";
import save from "src/models/util/save";
import Board from "src/models/board";


async function deattach(this: Board) {
  const user = await this.user();

  rem(user.idBoards, this.id);

  await save(this);
}


export default deattach;