import Card from "card"
import Checklist from "../Model.js"


type Arg = {
  card: Card
  title?: string 
  index?: number
}

const copy = async function(this: Checklist, {card, title = this.title, index = Infinity}: Arg): Promise<Checklist> {
  const copy = await this.copySelf({card, title, index})

  await this.copyOwnCheckitems(copy)

  return copy
}


export default copy