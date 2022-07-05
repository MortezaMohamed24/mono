import lt from "list/crud.js"
import Card from "../Model.js"
import {ServerError} from "errors"


async function list(this: Card) {
  const list = await lt.f(this.idList)

  if (list) {
    return list
  }

  throw new ServerError({
    status: 400, 
    message: "card: could not find owner list",
  })
}


export default list