import cd from "#models/card/crud";
import lt from "#models/list/crud";
import ll from "#models/label/crud";
import ct from "#models/checklist/crud";
import cm from "#models/checkitem/crud";
import add from "#models/util/idUtil/add";
import save from "#models/util/save";
import User from "#models/user";
import Board from "#models/board";


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