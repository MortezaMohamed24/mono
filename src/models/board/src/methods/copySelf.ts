import v from "src/models/board/fields/validators";
import Board from "src/models/board";
import Argument from "./argument.js";
import User from "src/models/user";
import Board from "src/models/board";


interface BoardMethodsCopySelfArgument {
  user: User;
  title?: Board["title"];
}


export default BoardMethodsCopySelfArgument;

async function copySelf(this: Board, {user, title = this.title}: Argument) {
  const copy = new Board({
    title: v.title(title),
    theme: this.theme,
    isStarred: this.isStarred,
    dateLastView: null,
    dateCreation: Date.now(),
    dateLastActivity: null,
  });

  await copy.attach(user);

  return copy;
}


export default copySelf;