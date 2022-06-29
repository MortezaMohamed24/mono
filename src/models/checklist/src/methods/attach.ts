import cm from "checkitem/crud.js"
import oid from "oid"
import Card from "card"
import save from "save"
import Checklist from "checklist"


async function attach(this: Checklist, card: Card, index: number = Infinity): Promise<void> {
  this.idUser = card.idUser
  this.idList = card.idList
  this.idCard = card.id
  this.idBoard = card.idBoard
  
  oid.add(card.idChecklists, this.id, index)

  await cm.um({idChecklist: this.id}, {idUser: card.idUser, idBoard: card.idBoard, idList: card.idList})
  await save(card, this)
}


export default attach