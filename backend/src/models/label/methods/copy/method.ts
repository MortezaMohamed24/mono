import Label from "#models/label";
import Board from "#models/board";


async function copy(this: Label, board: Board, index: number = Infinity) {
  const copy = new Label({
    name: this.name, 
    color: this.color,
  });

  await copy.attach(board, index);

  return copy;
}


export default copy;