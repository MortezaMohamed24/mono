import cd from "src/models/card/crud";
import ct from "src/models/checklist/crud";
import cm from "src/models/checkitem/crud";
import List from "src/models/list";
import save from "src/models/util/save";
import Board from "src/models/board/model";
import idUtil from "src/models/util/idUtil";


async function attach(this: List, board: Board, index: number = Infinity) {
  this.idUser = board.idUser;
  this.idBoard = board.id;
  
  idUtil.add(board.idLists, this.id, index);

  await cd.um({idList: this.id}, {idUser: board.idUser, idBoard: board.id});
  await ct.um({idList: this.id}, {idUser: board.idUser, idBoard: board.id});
  await cm.um({idList: this.id}, {idUser: board.idUser, idBoard: board.id});

  await save([this, board]);
}


export default attach;