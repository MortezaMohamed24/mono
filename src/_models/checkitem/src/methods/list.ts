import lt from "list/crud.js"
import List from "list"
import Checkitem from "../Model.js"


async function list(this: Checkitem): Promise<List> {
  const list = await lt.f(this.idList)

  if (list) {
    return list
  }

  throw new Error("checkitem: could not find owner list")
}


export default list