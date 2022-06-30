import lt from "../list/dist/crud.js"
import {Checklist} from "../Model.js"
import {ServerError} from "errors"


async function list(this: Checklist) {
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