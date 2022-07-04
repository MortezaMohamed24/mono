import oid from "oid"
import save from "save"
import Checkitem from "../Model.js"


async function deattach(this: Checkitem): Promise<void> {
  const checklist = await this.checklist()

  oid.rem(checklist.idCheckitems, this.id)

  await save(checklist)
}


export {deattach}
export default deattach