import oid from "oid"
import save from "save"
import Checklist from "../Model.js"


async function shift(this: Checklist, index: number = Infinity) {
  const card = await this.card()

  oid.move(card.idChecklists, this.id, index)

  await save(card)
}


export default shift