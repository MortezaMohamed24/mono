import oid from "oid"
import save from "save"
import Card from "../Model.js"
import Label from "label"


async function setLabels(this: Card, labels: Label[]) {
  for (let label of labels) {
    if (label.idBoard.equals(this.idBoard)) {
      oid.add(this.idLabels, label.id)
    } else {
      throw new Error("card: could not add a label to card because the label is owned by a board other than the card's")
    }
  }

  await save(this)
}


export {setLabels}
export default setLabels