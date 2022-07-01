import Card from "../Model.js"
import save from "save"
import List from "list"
import types from "../fields/types.js"
import fixBrokenLabelReferences from "label/util/fixBrokenLabelReferencesForCards.js"


type Argument = {
  /** The list into which to copy the card */
  list: List
  title?: string | undefined
  index?: number | undefined
  keepDates?: boolean | undefined
  keepLabels?: boolean | undefined
}

async function copySelf(this: Card, {
  list, 
  title = this.title, 
  index = Infinity,
  keepDates = true, 
  keepLabels = true,
}: Argument): Promise<Card> {
  const copy = new Card({
    due: keepDates ? this.dateDue : null,
    start: keepDates ? this.dateStart : null,
    title: types.title(title),
    idLabels: keepLabels ? this.idLabels : [],
    isWatched: this.isWatched,
    isComplete: keepDates ? this.isComplete : false,
    description: this.description,
    dateCreation: Date.now(),
    dateLastView: null,
  })

  await copy.attach(list, index)

  if (keepLabels) {
    await fixBrokenLabelReferences([copy])
  }
  
  await save(copy)

  return copy
}


export {copySelf}
export default copySelf