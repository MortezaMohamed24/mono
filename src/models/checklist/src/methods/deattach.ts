import oid from "oid"
import save from "save"
import Checklist from "../Model.js"


async function deattach(this: Checklist) {
  const card = await this.card()

  oid.rem(card.idChecklists, this.id)

  await save(card)
}


export default deattach