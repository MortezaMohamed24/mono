import types from "../fields/types.js"
import Checklist from "../Model.js"


type Argument = {
  card: Card 
  title?: undefined | string 
  index?: undefined | number
}

const copySelf = async function(this: Checklist, {card, title = this.title, index = Infinity}: Argument): Promise<Checklist> {
  const copy = new Checklist({
    title: types.title(title), 
    filter: this.filter,
  })

  await copy.attach(card, index)

  return copy
}


export {copySelf}
export default copySelf