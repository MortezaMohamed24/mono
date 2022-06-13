import v from "src/models/board/fields/validators";
import {Oid} from "#util/oid";
import Board from "src/models/board";
import Label from "src/models/label";
import Argument from "./argument.js";


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