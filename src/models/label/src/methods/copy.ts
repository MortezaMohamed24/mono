import Label from "label"
import Board from "board"


async function copy(this: Label, board: Board, index: number = Infinity): Promise<Label> {
  const copy = new Label({
    name: this.name, 
    color: this.color,
  })

  await copy.attach(board, index)

  return copy
}


export {copy}
export default copy