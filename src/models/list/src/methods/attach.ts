import cd from "card/crud.js"
import ct from "checklist/crud.js"
import cm from "checkitem/crud.js"
import oid from "oid"
import save from "save"
import List from "list"
import Board from "board"


async function attach(this: List, board: Board, index: number = Infinity) {
  this.idUser = board.idUser
  this.idBoard = board.id
  
  oid.add(board.idLists, this.id, index)

  await cd.um({idList: this.id}, {idUser: board.idUser, idBoard: board.id})
  await ct.um({idList: this.id}, {idUser: board.idUser, idBoard: board.id})
  await cm.um({idList: this.id}, {idUser: board.idUser, idBoard: board.id})

  await save([this, board])
}


export default attach