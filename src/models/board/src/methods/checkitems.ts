import cm from "src/models/checkitem/crud";
import Board from "src/models/board";


function checkitems(this: Board) {
  return cm.fm({idBoard: this.id});
}


export default checkitems;