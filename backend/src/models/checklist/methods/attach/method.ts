import cm from "#models/checkitem/crud";
import Card from "#models/card";
import save from "#models/util/save";
import idUtil from "#models/util/idUtil";
import Checklist from "#models/checklist";


async function attach(this: Checklist, card: Card, index: number = Infinity) {
  this.idUser = card.idUser;
  this.idList = card.idList;
  this.idCard = card.id;
  this.idBoard = card.idBoard;
  
  idUtil.add(card.idChecklists, this.id, index);

  await cm.um({idChecklist: this.id}, {idUser: card.idUser, idBoard: card.idBoard, idList: card.idList})
  await save(card, this);
}


export default attach;