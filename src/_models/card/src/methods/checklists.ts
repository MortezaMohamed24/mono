import ct from "checklist/crud.js"
import Card from "../Model.js"
import Checklist from "checklist"


function checklists(this: Card): Promise<Checklist[]> {
  return ct.fm(this.idChecklists)
}


export {checklists}
export default checklists