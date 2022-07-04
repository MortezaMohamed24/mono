import cm from "checkitem/crud.js"
import Card from "../Model.js"
import Checkitem from "checkitem"


function checkitems(this: Card): Promise<Checkitem[]> {
  return cm.fm({idCard: this.id})
}


export {checkitems}
export default checkitems