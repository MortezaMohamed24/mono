import cd from "src/models/card/crud";
import Board from "src/models/board";


function cards(this: Board) {
  return cd.fm({idBoard: this.id});
}


export default cards;