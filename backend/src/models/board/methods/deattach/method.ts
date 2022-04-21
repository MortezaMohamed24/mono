import rem from "#models/util/idUtil/rem";
import save from "#models/util/save";
import Board from "#models/board";


async function deattach(this: Board) {
  const user = await this.user();

  rem(user.idBoards, this.id);

  await save(this);
}


export default deattach;