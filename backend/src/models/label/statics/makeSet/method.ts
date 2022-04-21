import Board from "#models/board";
import Label from "#models/label";
import {COLORS} from "#models/label/fields/constants";


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