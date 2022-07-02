import {Oid} from "oid"
import types from "../fields/types.js"
import Board from "board"
import Label from "label"


interface Argument {
  id?: Oid | undefined
  name?: Label["name"]
  color: Label["color"]
  board: Board
}

async function make({id = new Oid(), name = null, color, board}: Argument): Promise<Label> {
  const label = new Label({
    id: id,
    name: types.name(name), 
    color: types.color(color),
  })

  await label.attach(board)

  return label
}


export {make}
export default make