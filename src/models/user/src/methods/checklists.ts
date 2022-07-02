import ct from "checklist/dist/crud.js"
import User from "../Model.js"
import Checklist from "checklist"


export function checklists(this: User): Promise<Checklist[]> {
  return ct.fm({idUser: this.id})
}


export default checklists