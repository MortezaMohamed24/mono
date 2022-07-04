import types from "../fields/formats.js"
import {ALL_FILTER} from "../constants.js"
import {Oid} from "oid"
import {Card} from "card"
import {Checklist} from "../Model.js"
import {ChecklistModel} from "../Model.js"


type Argument = {
  id?: Oid | undefined
  card: Card
  title: Checklist["title"]
  filter?: Checklist["filter"]
}

async function make(this: ChecklistModel, {id, card, title, filter = ALL_FILTER}: Argument): Promise<Checklist> {
  const checklist = new Checklist({
    id: id ?? new Oid(),
    title: types.title(title), 
    filter: types.filter(filter),
  })

  await checklist.attach(card)

  return checklist
}


export {make}
export default make