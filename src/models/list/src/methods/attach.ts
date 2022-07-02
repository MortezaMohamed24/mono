import cd from "card/dist/crud.js"
import ct from "checklist/dist/crud.js"
import cm from "checkitem/dist/crud.js"
import oid from "oid"
import save from "save"
import List from "../Model.js"
import Board from "board"


async function attach(this: List, board: Board, index: number = Infinity): Promise<void> {
  this.idUser = board.idUser
  this.idBoard = board.id
  
  oid.add(board.idLists, this.id, index)

  await cd.um({idList: this.id}, {idUser: board.idUser, idBoard: board.id})
  await ct.um({idList: this.id}, {idUser: board.idUser, idBoard: board.id})
  await cm.um({idList: this.id}, {idUser: board.idUser, idBoard: board.id})

  await save([this, board])
}


export {attach}
export default attach