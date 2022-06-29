import lt from "src/models/list/crud";
import Board from "src/models/board";


function lists(this: Board) {
  return lt.fm(this.idLists);
}


export default lists;