import ct from "checklist/crud.js"
import Board from "../Model.js"
import Checklist from "checklist"


function checklists(this: Board): Promise<Checklist[]> {
  return ct.fm({idBoard: this.id})
}


export {checklists}
export default checklists