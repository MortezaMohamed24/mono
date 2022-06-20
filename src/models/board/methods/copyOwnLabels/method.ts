import Board from "src/models/board";
import Label from "src/models/label";


async function copyOwnLabels(this: Board, board: Board) {
  const labels: Label[] = [];

  for (let label of await this.labels()) {
    labels.push(await label.copy(board)); 
  }

  return labels;
}


export default copyOwnLabels;