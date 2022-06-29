import List from "src/models/list";
import Card from "src/models/card";
import save from "src/models/util/save";
import fixBrokenLabelReferences from "src/models/util/fixBrokenLabelReferencesForCards";


async function move(this: Card, list: List, index = Infinity) {
  if (list.id.equals(this.idList)) {
    await this.shift(index);
  } 
  
  else {
    await this.deattach();
    await this.attach(list, index);
    await fixBrokenLabelReferences([this]);
    await save(this);
  }
}


export default move;