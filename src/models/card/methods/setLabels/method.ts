import save from "src/models/util/save";
import Card from "src/models/card";
import Label from "src/models/label";
import idUtil from "src/models/util/idUtil";


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