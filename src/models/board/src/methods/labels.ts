import ll from "src/models/label/crud";
import Board from "src/models/board";


function labels(this: Board) {
  return ll.fm(this.idLabels);
}


export default labels;