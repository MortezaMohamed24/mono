import save from "src/models/util/save";
import Card from "src/models/card";
import Label from "src/models/label";
import idUtil from "src/models/util/idUtil";


async function unlabel(this: Card, label: Label) {
  idUtil.rem(this.idLabels, label.id);
  
  await save(this);
}


export default unlabel;