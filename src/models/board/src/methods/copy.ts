import Board from "src/models/board";
import Argument from "./argument";

import User from "src/models/user";
import Board from "src/models/board";


interface BoardMethodCopyArgument {
  user: User;
  title?: Board["title"] | undefined;
  keepLists?: boolean | undefined;
  keepCards?: boolean | undefined;
  keepLabels?: boolean | undefined;
}


export default BoardMethodCopyArgument;

async function copy(this: Board, {
  user,
  title = this.title, 
  keepLists = true,
  keepCards = true,
  keepLabels = true,
}: Argument) {
  const board = await this.copySelf({user, title});

  keepLists && await this.copyOwnLists({board, keepCards});
  keepLabels && await this.copyOwnLabels(board);

  return board;
}


export default copy;