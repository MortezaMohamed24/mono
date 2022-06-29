import oid from "oid"
import save from "save"
import Checkitem from "../Model.js"


async function shift(this: Checkitem, index = Infinity): Promise<void> {
  const checklist = await this.checklist()

  oid.move(checklist.idCheckitems, this.id, index)

  await save(checklist)
}


export default shift