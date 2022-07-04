import ll from "card/crud.js" 
import lt from "list/crud.js" 
import cd from "label/crud.js" 
import ct from "checklist/crud.js" 
import cm from "checkitem/crud.js" 
import Board from "../Model.js"


async function destroy(this: Board): Promise<void> {
  await this.deattach()
  await this.remove()
  await ll.dm({idBoard: this.id})
  await lt.dm({idBoard: this.id})
  await cd.dm({idBoard: this.id})
  await ct.dm({idBoard: this.id})
  await cm.dm({idBoard: this.id})
}


export {destroy}
export default destroy