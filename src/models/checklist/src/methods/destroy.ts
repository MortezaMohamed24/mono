import cm from "checkitem/dist/crud.js"
import Checklist from "../Model.js"


async function destroy(this: Checklist) {
  await this.deattach()
  await cm.dm({idChecklist: this.id})
}


export {destroy}
export default destroy