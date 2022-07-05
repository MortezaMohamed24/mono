import Label from "label"
import Board from "../Model.js"


async function copyOwnLabels(this: Board, board: Board): Promise<Label[]> {
  const labels: Label[] = []

  for (let label of await this.labels()) {
    labels.push(await label.copy(board)) 
  }

  return labels
}


export {copyOwnLabels}
export default copyOwnLabels