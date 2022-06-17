import save from "mongoose-save"
import Checkitem from "checkitem"
import Checklist from "src/models/checklist"


async function copy(this: Checkitem, checklist: Checklist, index: number = Infinity) {
  const copy = new Checkitem({
    content: this.content, 
    isComplete: this.isComplete,
  })

  await copy.attach(checklist, index)
  await save(copy)

  return copy
}


export default copy