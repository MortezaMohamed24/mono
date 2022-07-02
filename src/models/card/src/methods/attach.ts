import ct from "checklist/crud.js"
import cm from "checkitem/DefaultProjector"
import oid from "oid"
import save from "save"
import Card from "../Model.js"
import List from "list"


async function attach(this: Card, list: List, index = Infinity) {
  this.idUser = list.idUser
  this.idList = list.id
  this.idBoard = list.idBoard

  oid.add(list.idCards, this.id, index)

  await ct.um({idCard: this.id}, {idUser: list.idUser, idList: list.id, idBoard: list.idBoard})
  await cm.um({idCard: this.id}, {idUser: list.idUser, idList: list.id, idBoard: list.idBoard})

  await save(this)
  await list.sort()
}


export {attach}
export default attach