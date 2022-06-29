import ct from "checklist/crud.js"
import Checklist from "checklist"
import Checkitem from "../Model.js"


async function checklist(this: Checkitem): Promise<Checklist> {
  const checklist = await ct.f(this.idChecklist)

  if (checklist) {
    return checklist
  }

  throw new Error("checkitem: could not find owner checklist")
}

export default checklist