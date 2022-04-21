import lt from "#models/list/crud";
import Board from "#models/board";


function lists(this: Board) {
  return lt.fm(this.idLists);
}


export default lists;