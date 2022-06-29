import bd from "src/models/board/crud"
import User from "../Model.js"


function boards(this: User) {
  return bd.fm(this.idBoards)
}


export default boards