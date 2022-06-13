import v from "src/models/list/fields/validators";
import List from "src/models/list";
import Argument from "./argument.js";


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