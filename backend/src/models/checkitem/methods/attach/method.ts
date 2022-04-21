import save from "#models/util/save";
import idUtil from "#models/util/idUtil";
import Checkitem from "#models/checkitem";
import Checklist from "#models/checklist";


async function attach(this: Checkitem, checklist: Checklist, index: number = Infinity) {
  this.idUser = checklist.idUser;
  this.idList = checklist.idList;
  this.idCard = checklist.idCard;
  this.idBoard = checklist.idBoard;
  this.idChecklist = checklist.id;

  idUtil.add(checklist.idCheckitems, this.id, index);

  await save(this, checklist);
}


export default attach;