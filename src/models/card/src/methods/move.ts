import List from "list"
import Card from "card"
import save from "save"
import fixBrokenLabelReferences from "label/util/fixBrokenLabelReferencesForCards.js"


async function move(this: Card, list: List, index = Infinity): Promise<void> {
  if (list.id.equals(this.idList)) {
    await this.shift(index)
  } 
  
  else {
    await this.deattach()
    await this.attach(list, index)
    await fixBrokenLabelReferences([this])
    await save(this)
  }
}


export {move}
export default move