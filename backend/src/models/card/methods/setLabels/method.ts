import save from "#models/util/save";
import Card from "#models/card";
import Label from "#models/label";
import idUtil from "#models/util/idUtil";


async function setLabels(this: Card, labels: Label[]) {
  for (let label of labels) {
    if (label.idBoard.equals(this.idBoard)) {
      idUtil.add(this.idLabels, label.id);
    } else {
      throw new Error("card: could not add a label to card because the label is owned by a board other than the card's");
    }
  }

  await save(this);
}


export default setLabels;