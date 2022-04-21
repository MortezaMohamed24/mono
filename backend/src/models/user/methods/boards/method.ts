import bd from "#models/board/crud";
import User from "#models/user";


function boards(this: User) {
  return bd.fm(this.idBoards);
}


export default boards;