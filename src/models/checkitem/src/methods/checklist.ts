import ct from "src/models/checklist/crud"
import Checkitem from "src/models/checkitem"


async function checklist(this: Checkitem) {
  const checklist = await ct.f(this.idChecklist)

  if (checklist) {
    return checklist
  }

  throw new Error("checkitem: could not find owner checklist")
}

export default checklist