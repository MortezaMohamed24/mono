import Card from "../Model.js"
import List from "list"


type Argument = {
  list: List
  title?: string | undefined
  index?: number | undefined
  keepDates?: boolean | undefined
  keepLabels?: boolean | undefined
  keepChecklists?: boolean | undefined
}

async function copy(this: Card, {
  list,
  title = this.title,
  index = Infinity,
  keepDates = true, 
  keepLabels = true, 
  keepChecklists = true,
}: Argument): Promise<Card> {
  const copy = await this.copySelf({list, title, index, keepDates, keepLabels})

  if (keepChecklists) {
    await this.copyOwnChecklists(copy)
  }
  
  return copy
}


export {copy}
export default copy