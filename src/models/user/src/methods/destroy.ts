import cd from "card/dist/crud.js"
import lt from "list/dist/crud.js"
import bd from "board/dist/crud.js"
import ll from "label/dist/crud.js"
import cm from "checkitem/dist/crud.js"
import ct from "checklist/dist/crud.js"
import User from "../Model.js"


export async function destroy(this: User): Promise<void> {
  await this.remove()
  await bd.dm({idUser: this.id})
  await ll.dm({idUser: this.id})
  await lt.dm({idUser: this.id})
  await cd.dm({idUser: this.id})
  await ct.dm({idUser: this.id})
  await cm.dm({idUser: this.id})
}


export default destroy