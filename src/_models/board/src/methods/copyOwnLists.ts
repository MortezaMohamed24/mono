import List from "list"
import Board from "../Model.js"
import Argument from "./argument.js"


type Argument = {
  board: Board 
  keepCards?: boolean
}

async function copyOwnLists(this: Board, {board, keepCards = true}: Argument): Promise<List[]> {
  const lists: List[] = []

  for (let list of await this.lists()) {
    lists.push(await list.copy({board, keepCards}))
  }

  return lists
}


export {copyOwnLists}
export default copyOwnLists