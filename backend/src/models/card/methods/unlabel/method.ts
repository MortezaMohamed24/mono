import save from "#models/util/save";
import Card from "#models/card";
import Label from "#models/label";
import idUtil from "#models/util/idUtil";


async function unlabel(this: Card, label: Label) {
  idUtil.rem(this.idLabels, label.id);
  
  await save(this);
}


export default unlabel;