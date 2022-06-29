import v from "src/models/list/fields/validators";
import List from "src/models/list";
import Argument from "./copySelf/argument.js";
import Board from "src/models/board";


interface ListMethodsCopySelfArgument {
  title?: string | undefined;
  index?: number | undefined;
  board: Board;
}


export default ListMethodsCopySelfArgument;

async function copySelf(this: List, {
  board, 
  title = this.title,
  index = Infinity,
}: Argument) {
  const copy = new List({
    title: v.title(title),
    idUser: this.idUser,
    idBoard: this.idBoard,
    isWatched: this.isWatched,
    sortMethod: this.sortMethod,
  });
  
  await copy.attach(board, index);

  copy.id

  return copy;
}


export default copySelf;