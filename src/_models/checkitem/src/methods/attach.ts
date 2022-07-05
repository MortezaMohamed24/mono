import oid from "oid"
import save from "save"
import Checkitem from "../Model.js"
import Checklist from "checklist/Model.js"


async function attach(this: Checkitem, checklist: Checklist, index: number = Infinity) {
  this.idUser = checklist.idUser
  this.idList = checklist.idList
  this.idCard = checklist.idCard
  this.idBoard = checklist.idBoard
  this.idChecklist = checklist.id

  oid.add(checklist.idCheckitems, this._id, index)

  await save(this, checklist)
}


export default attach