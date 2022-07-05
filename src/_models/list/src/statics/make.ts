import {Oid} from "oid"
import {List} from "../Model.js"
import {Board} from "board"
import {DATE_CREATED_ASCENDING} from "../constants.js" 


type Argument = {
  id?: Oid | undefined
  title: List["title"]
  board: Board
  sortMethod?: List["sortMethod"] | undefined
}

async function make(arg: Argument) {
  const list = new List({
    _id: arg.id ?? new Oid(),
    title: arg.title, 
    sortMethod: arg.sortMethod ?? DATE_CREATED_ASCENDING,
  })

  await list.attach(arg.board)

  return list
}


export {make}
export default make