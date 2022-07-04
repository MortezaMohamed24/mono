import {lt} from "list"
import {List} from "list"
import {Checklist} from "../Model.js"
import {ServerError} from "errors"


async function list(this: Checklist): Promise<List> {
  const list = lt.f(this.idList)

  if (list) {
    return list
  }

  throw new ServerError({
    status: 500, 
    message: "checklist: could not find owner list",
  })
}


export {list}
export default list