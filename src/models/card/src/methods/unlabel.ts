import oid from "oid"
import save from "save"
import Card from "../Model.js"
import Label from "label"


async function unlabel(this: Card, label: Label) {
  oid.rem(this.idLabels, label.id)
  await save(this)
}


export {unlabel}
export default unlabel