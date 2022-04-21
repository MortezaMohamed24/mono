import cd from "#models/card/crud";
import Board from "#models/board";


function cards(this: Board) {
  return cd.fm({idBoard: this.id});
}


export default cards;