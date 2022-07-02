import bd from "board/dist/crud.js"
import User from "../Model.js"
import Board from "board"


function boards(this: User): Promise<Board[]> {
  return bd.fm(this.idBoards)
}


export {boards}
export default boards