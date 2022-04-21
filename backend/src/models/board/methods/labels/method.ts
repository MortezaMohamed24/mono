import ll from "#models/label/crud";
import Board from "#models/board";


function labels(this: Board) {
  return ll.fm(this.idLabels);
}


export default labels;