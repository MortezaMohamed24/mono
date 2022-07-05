import Board from "board"
import Label from "label"
import {COLORS} from "../constants.js"


async function makeSet(board: Board): Promise<Label[]> {
  const labels: Label[] = []

  for (let color of COLORS) {
    labels.push(await Label.make({
      name: null, 
      color: color,
      board: board,
    }))
  }

  return labels
}


export {makeSet}
export default makeSet