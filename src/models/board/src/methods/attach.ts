import cd from "card/crud"
import lt from "list/crud"
import ll from "label/crud"
import ct from "checklist/crud"
import cm from "checkitem/crud"
import oid from "oid"
import save from "save"
import User from "user"
import Board from "board"


async function attach(this: Board, user: User) {
  oid.add(user.idBoards, this.id)
  
  this.idUser = user.id
  
  await ll.um({idBoard: this.id}, {idUser: user.id})
  await lt.um({idBoard: this.id}, {idUser: user.id})
  await cd.um({idBoard: this.id}, {idUser: user.id})
  await ct.um({idBoard: this.id}, {idUser: user.id})
  await cm.um({idBoard: this.id}, {idUser: user.id})

  await save(this, user)
}


export default attach