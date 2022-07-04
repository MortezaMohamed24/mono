import {cm} from "checkitem"
import {Checklist} from "../Model.js"
import {Checkitem} from "checkitem"


async function checkitems(this: Checklist): Promise<Checkitem[]> {
  return cm.fm({idChecklist: this._id})
}


export {checkitems}
export default checkitems