import Card from "src/models/card";
import save from "src/models/util/save";
import Label from "src/models/label";
import idUtil from "src/models/util/idUtil";


async function label(this: Card, label: Label) {
  if (label.idBoard.equals(this.idBoard)) {
    idUtil.add(this.idLabels, label.id);
    await save(this);
  } else {
    throw new Error("card: could not add a label to card because the label is owned by a board other than the card's");
  }
}


export default label;