import List from "src/models/list";
import Board from "src/models/board";
import Argument from "./argument.js";


async function copyOwnLists(this: Board, {board, keepCards = true}: Argument) {
  const lists: List[] = [];

  for (let list of await this.lists()) {
    lists.push(await list.copy({board, keepCards}));
  }

  return lists;
}


export default copyOwnLists;