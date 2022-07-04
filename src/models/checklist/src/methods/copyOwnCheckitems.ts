import Checklist from "../Model.js"
import Checkitem from "checkitem"


async function copyOwnCheckitems(this: Checklist, checklist: Checklist): Promise<Checkitem[]> {
  const copies: Checkitem[] = []

  for (let checkitem of await this.checkitems()) {
    copies.push(await checkitem.copy(checklist))
  }

  return copies
}


export {copyOwnCheckitems}
export default copyOwnCheckitems