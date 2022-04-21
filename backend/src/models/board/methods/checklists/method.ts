import ct from "#models/checklist/crud";
import Board from "#models/board";


function checklists(this: Board) {
  return ct.fm({idBoard: this.id});
}


export default checklists;