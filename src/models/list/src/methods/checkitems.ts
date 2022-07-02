import cm from "checkitem/dist/crud.js"
import List from "../Model.js"
import Checkitem from "checkitem"


async function checkitems(this: List): Promise<Checkitem[]> {
  return cm.fm({idList: this.id})
}


export {checkitems}
export default checkitems