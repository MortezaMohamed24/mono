import ct from "checklist/dist/crud.js"
import List from "../Model.js"
import Checklist from "checklist"


function checklists(this: List): Promise<Checklist[]> {
  return ct.fm({idList: this.id})
}


export {checklists}
export default checklists