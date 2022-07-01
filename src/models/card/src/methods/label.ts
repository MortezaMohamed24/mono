import oid from "oid"
import Card from "../Model.js"
import save from "save"
import Label from "label"
import {ServerError} from "errors"


async function label(this: Card, label: Label): Promise<void> {
  if (label.idBoard.equals(this.idBoard)) {
    oid.add(this.idLabels, label.id)
    await save(this)
  } else {
    throw new ServerError({
      status: 401,
      message: "card: could not add a label to card because the label is owned by a board other than the card's",
    })
  }
}


export {label}
export default label