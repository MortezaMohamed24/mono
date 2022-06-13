import Board from "src/models/board";
import Label from "src/models/label";
import {COLORS} from "src/models/label/fields/constants";


async function makeSet(board: Board) {
  const labels: Label[] = [];

  for (let color of COLORS) {
    labels.push(await Label.make({
      name: null, 
      color: color,
      board: board,
    }));
  }

  return labels;
};


export default makeSet