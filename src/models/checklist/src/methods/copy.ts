import Card from "card"
import Checklist from "../Model.js"


type Arg = {
  card: Card
  title?: undefined | string 
  index?: undefined | number
}

const copy = async function(this: Checklist, arg: Arg): Promise<Checklist> {
  const copy = await this.copySelf(arg)

  await this.copyOwnCheckitems(copy)

  return copy
}


export default copy