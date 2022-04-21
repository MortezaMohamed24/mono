import cm from "#models/checkitem/crud";
import Board from "#models/board";


function checkitems(this: Board) {
  return cm.fm({idBoard: this.id});
}


export default checkitems;