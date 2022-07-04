import {cd} from "card"
import {Card} from "card"
import {Checkitem} from "../Model.js"


async function card(this: Checkitem): Promise<Card> {
  const card = await cd.f(this.idCard)

  if (card) {
    return card
  }

  throw new Error("checkitem: could not find owner card")
}


export {card}
export default card