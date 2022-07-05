import cd from "card/dist/crud.js"
import lt from "list/dist/crud.js"
import ll from "label/dist/crud.js"
import ct from "checklist/dist/crud.js"
import cm from "checkitem/dist/crud.js"
import oid from "oid"
import save from "save"
import User from "user"
import Board from "../Model.js"


async function attach(this: Board, user: User): Promise<void> {
  oid.add(user.idBoards, this.id)
  
  this.idUser = user.id
  
  await ll.um({idBoard: this.id}, {idUser: user.id})
  await lt.um({idBoard: this.id}, {idUser: user.id})
  await cd.um({idBoard: this.id}, {idUser: user.id})
  await ct.um({idBoard: this.id}, {idUser: user.id})
  await cm.um({idBoard: this.id}, {idUser: user.id})

  await save(this, user)
}


export {attach}
export default attach

new Board({
  theme: "cyan",
  title: "",
  _id: new Oid(),
  dateCreation: 75765,
  dateLastActivity: 8987,
  dateLastView: 0909,
  idLabels: [],
  idLists: [],
  idUser: new Oid(),
  isStarred: true,
}).copy