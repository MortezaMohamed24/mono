import cd from "card/crud.js"
import Card from "card"
import Checklist from "../Model.js"
import {ServerError} from "errors"


async function card(this: Checklist): Promise<Card> {
  const card = await cd.f(this.idCard)

  if (card) {
    return card
  }

  throw new ServerError({
    status: 500, 
    message: "checklist: could not find owner card",
  })
}


export default card