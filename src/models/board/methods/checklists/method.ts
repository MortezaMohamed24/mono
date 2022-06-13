import ct from "src/models/checklist/crud";
import Board from "src/models/board";


function checklists(this: Board) {
  return ct.fm({idBoard: this.id});
}


export default checklists;