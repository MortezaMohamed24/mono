import List from "../Model.js"
import types from "../fields/types.js"
import Board from "board"


type Argument {
  title?: string | undefined
  index?: number | undefined
  board: Board
}

async function copySelf(this: List, {board, title = this.title, index = Infinity}: Argument): Promise<List> {
  const copy = new List({
    title: types.title(title),
    idUser: this.idUser,
    idBoard: this.idBoard,
    isWatched: this.isWatched,
    sortMethod: this.sortMethod,
  })
  
  await copy.attach(board, index)

  return copy
}


export {copySelf}
export default copySelf