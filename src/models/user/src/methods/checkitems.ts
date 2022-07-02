import cm from "checkitem/dist/crud.js"
import User from "../Model.js"
import Checkitem from "checkitem"


function checkitems(this: User): Promise<Checkitem[]> {
  return cm.fm({idUser: this.id})
}


export {checkitems}
export default checkitems