import ll from "label/crud.js"
import Label from "label"
import Board from "../Model.js"


function labels(this: Board): Promise<Label[]> {
  return ll.fm(this.idLabels)
}


export {labels}
export default labels