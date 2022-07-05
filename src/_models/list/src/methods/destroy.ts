import cd from "card/dist/crud.js"
import ct from "checklist/dist/crud.js"
import cm from "checkitem/dist/crud.js"
import List from "../Model.js"


async function destroy(this: List): Promise<void> {
  await this.deattach()
  await this.remove()
  await cd.dm({idList: this.id})
  await ct.dm({idList: this.id})
  await cm.dm({idList: this.id})
}


export {destroy}
export default destroy