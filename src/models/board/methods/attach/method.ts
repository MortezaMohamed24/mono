import cd from "src/models/card/crud";
import lt from "src/models/list/crud";
import ll from "src/models/label/crud";
import ct from "src/models/checklist/crud";
import cm from "src/models/checkitem/crud";
import add from "src/models/util/idUtil/add";
import save from "src/models/util/save";
import User from "src/models/user";
import Board from "src/models/board";


async function attach(this: Board, user: User) {
  add(user.idBoards, this.id);
  
  this.idUser = user.id;
  
  await ll.um({idBoard: this.id}, {idUser: user.id});
  await lt.um({idBoard: this.id}, {idUser: user.id});
  await cd.um({idBoard: this.id}, {idUser: user.id});
  await ct.um({idBoard: this.id}, {idUser: user.id});
  await cm.um({idBoard: this.id}, {idUser: user.id});

  await save(this, user);
}


export default attach;