import v from "src/models/checklist/fields/validators"
import {ALL} from "src/models/checklist/fields/constants"
import Card from "src/models/card"
import {Oid} from "#util/oid"
import Arg from "./argument.js"
import Checklist from "src/models/checklist"


type Arg = {
  id?: Oid | undefined
  card: Card
  title: Checklist["title"]
  filter?: Checklist["filter"]
}

const make = async ({id, card, title, filter = ALL}: Arg) => {
  const checklist = new Checklist({
    id: id ?? new Oid(),
    title: v.title(title), 
    filter: v.filter(filter),
  })

  await checklist.attach(card)

  return checklist
}


export default make