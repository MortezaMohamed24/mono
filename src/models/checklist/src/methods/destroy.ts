import {cm} from "checkitem"
import {Checklist} from "../Model.js"


async function destroy(this: Checklist): Promise<void> {
  await this.deattach()
  await cm.dm({idChecklist: this.id})
}


export {destroy}
export default destroy