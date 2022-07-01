import cm from "checkitem/crud.js"
import ct from "checklist/crud.js"
import Card from "../Model.js"


async function destroy(this: Card): Promise<void> {
  await this.deattach()
  await this.remove()
  await ct.dm({idCard: this.id})
  await cm.dm({idCard: this.id})
}


export {destroy}
export default destroy