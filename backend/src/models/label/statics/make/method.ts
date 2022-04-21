import v from "#models/label/fields/validators";
import {Oid} from "#util/oid";
import Board from "#models/board";
import Label from "#models/label";


interface Argument {
  id?: Oid | undefined;
  name?: Label["name"];
  color: Label["color"];
  board: Board;
}

async function make({id = new Oid(), name = null, color, board}: Argument) {
  const label = new Label({
    id: id,
    name: v.name(name), 
    color: v.color(color),
  });

  await label.attach(board);

  return label;
}


export default make;