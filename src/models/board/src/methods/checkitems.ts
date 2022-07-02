import cm from "checkitem/crud.js"
import Board from "../Model.js"
import Checkitem from "checkitem"


function checkitems(this: Board): Promise<Checkitem[]> {
  return cm.fm({idBoard: this.id})
}


export {checkitems}
export default checkitems