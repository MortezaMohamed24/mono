import lt from "list/dist/crud.js"
import User from "../Model.js"
import List from "list"


export function lists(this: User): Promise<List[]> {
  return lt.fm({idUser: this.id})
}


export default lists