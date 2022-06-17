import save from "mongoose-save"
import idUtil from "oid-util"
import Checkitem from "../Model.js"
import Checklist from "checklist/Model.js"


async function attach(this: Checkitem, checklist: Checklist, index: number = Infinity) {
  this.idUser = checklist.idUser
  this.idList = checklist.idList
  this.idCard = checklist.idCard
  this.idBoard = checklist.idBoard
  this.idChecklist = checklist.id

  idUtil.add(checklist.idCheckitems, this.id, index)

  await save(this, checklist)
}


export default attach