import Card from "#models/card";
import save from "#models/util/save";
import Label from "#models/label";
import idUtil from "#models/util/idUtil";


async function label(this: Card, label: Label) {
  if (label.idBoard.equals(this.idBoard)) {
    idUtil.add(this.idLabels, label.id);
    await save(this);
  } else {
    throw new Error("card: could not add a label to card because the label is owned by a board other than the card's");
  }
}


export default label;