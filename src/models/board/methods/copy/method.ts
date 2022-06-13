import Board from "src/models/board";
import Argument from "./argument";


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