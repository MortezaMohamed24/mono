import ll from "label/crud.js"
import Card from "../Model.js"
import Label from "label"


async function labels(this: Card): Promise<Label> {
  return ll.fm(this.idLabels)
}


export {labels}
export default labels