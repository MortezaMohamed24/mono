import v from "../fields/types.js"
import List from "list"
import Card from "../Model.js"
import Label from "label"
import {Oid} from "oid"


type Argument = {
  id?: Oid | undefined
  list: List
  title: string
  labels?: Label[] | undefined
  description?: string | null | undefined
}

async function make({id = new Oid(), list, title, labels = [], description = null}: Argument) {
  const card = new Card({
    id: id,
    title: v.title(title),
    dateDue: null,
    dateStart: null,
    isWatched: false,
    isComplete: false,
    description: v.description(description),
    dateCreation: Date.now(),
    dateLastView: null,
    dateLastActivity: Date.now(),
  })

  await card.attach(list)
  await card.setLabels(labels)

  return card
}


export {make}
export default make