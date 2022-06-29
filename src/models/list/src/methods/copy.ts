import List from "src/models/list";
import Argument from "./copy/argument.js";


import Board from "src/models/board";


interface ListMethodsCopyArgument {
  title?: string | undefined;
  index?: number | undefined;
  board: Board;
  keepCards?: boolean | undefined;
}


export default ListMethodsCopyArgument;

async function copy(this: List, {
  board,
  title = this.title, 
  index = Infinity,
  keepCards = true, 
}: Argument) {
  const copy = await this.copySelf({board, title, index});

  if (keepCards) {
    await this.copyAllOwnCards(copy);
  }

  return copy;
}


export default copy;