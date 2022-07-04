import Checkitem from "../Model.js"
import Checklist from "checklist"


async function move(this: Checkitem, checklist: Checklist, index: number = Infinity): Promise<void> {
  if (checklist.id.equals(this.idChecklist)) {
    await this.shift(index)
  } else {
    await this.deattach()
    await this.attach(checklist, index)
  }
}


export {move}
export default move