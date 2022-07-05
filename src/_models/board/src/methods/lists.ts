import lt from "list/crud.js"
import List from "list"
import Board from "../Model.js"


function lists(this: Board): Promise<List[]> {
  return lt.fm(this.idLists)
}


export {lists}
export default lists