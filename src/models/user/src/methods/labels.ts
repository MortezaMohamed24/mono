import ll from "label/dist/crud.js"
import User from "../Model.js"
import Label from "label"


export function labels(this: User): Promise<Label[]> {
  return ll.fm({idUser: this.id})
}


export default labels