import v from "../fields/types.js"
import Checklist from "../Model.js"


interface Argument {
  card: Card 
  title?: undefined | string 
  index?: undefined | number
}

async function copySelf(this: Checklist, {card, title = this.title, index = Infinity}: Argument) {

  const copy = new Checklist({
    title: v.title(title), 
    filter: this.filter,
  })

  await copy.attach(card, index)

  return copy

}


export {copySelf}
export default copySelf