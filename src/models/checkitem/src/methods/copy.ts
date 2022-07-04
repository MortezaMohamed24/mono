import save from "save"
import Checklist from "checklist"
import Checkitem from "../Model.js"


async function copy(this: Checkitem, checklist: Checklist, index: number = Infinity): Promise<Checkitem> {
  const copy = new Checkitem({
    content: this.content, 
    isComplete: this.isComplete,
  })

  await copy.attach(checklist, index)
  await save(copy)

  return copy
}


export {copy}
export default copy