import Board from "#models/board";


function updateDateLastView(this: Board) {
  this.dateLastView = Date.now();
}


export default updateDateLastView;