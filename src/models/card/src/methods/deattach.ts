import oid from "oid"
import Card from "../Models.js"
import save from "save"


async function deattach(this: Card) {
  const list = await this.list()

  oid.rem(list.idCards, this.id)

  await save(list)
}


export {deattach}
export default deattach