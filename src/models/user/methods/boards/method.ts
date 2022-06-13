import bd from "src/models/board/crud";
import User from "src/models/user";


function boards(this: User) {
  return bd.fm(this.idBoards);
}


export default boards;