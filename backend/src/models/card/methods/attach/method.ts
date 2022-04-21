import ct from "#models/checklist/crud";
import cm from "#models/checkitem/crud";
import List from "#models/list";
import Card from "#models/card";
import save from "#models/util/save";
import idUtil from "#models/util/idUtil";


async function attach(this: Card, list: List, index = Infinity) {
  this.idUser = list.idUser;
  this.idList = list.id;
  this.idBoard = list.idBoard;

  idUtil.add(list.idCards, this.id, index);

  await ct.um({idCard: this.id}, {idUser: list.idUser, idList: list.id, idBoard: list.idBoard});
  await cm.um({idCard: this.id}, {idUser: list.idUser, idList: list.id, idBoard: list.idBoard});

  await save(this);
  await list.sort();
}


export default attach;