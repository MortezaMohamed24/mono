import v from "src/models/board/fields/validators";
import {Oid} from "#util/oid";
import Board from "src/models/board";
import Label from "src/models/label";
import Argument from "./argument.js";

import User from "src/models/user/model";
import {Oid} from "#util/oid";
import Board from "src/models/board";


interface BoardStaticsMakeArgument {
  id?: Oid | undefined;
  user: User;
  title: Board["title"]; 
  theme: Board["theme"]; 
  isStarred?: Board["isStarred"];
}


// export default BoardStaticsMakeArgument;

async function make({id = new Oid(), user, title, theme, isStarred = false}: Argument) {
  const board = new Board({
    id: id,
    title: v.title(title),
    theme: v.theme(theme),
    isStarred: isStarred,
    dateLastView: null,
    dateCreation: Date.now(),
    dateLastActivity: null,
  });

  await board.attach(user);
  await Label.makeSet(board);

  return board;
}


export default make;