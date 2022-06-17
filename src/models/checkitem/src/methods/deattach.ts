import save from "mongoose-save"
import idUtil from "oid-util"
import Checkitem from "checkitem"


async function deattach(this: Checkitem) {
  const checklist = await this.checklist()

  idUtil.rem(checklist.idCheckitems, this.id)

  await save(checklist)
}


export default deattach