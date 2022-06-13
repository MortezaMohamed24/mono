import Board from "src/models/board";
import {validators} from "src/models/board/fields";

  
export function title(this: Board, title: Board["title"]): Board["title"] {
  return validators.title(title);
}

export function theme(this: Board, theme: Board["theme"]): Board["theme"] {
  return validators.theme(theme);
}

export function isStarred(this: Board, isStarred: Board["isStarred"]): Board["isStarred"] {
  return validators.isStarred(isStarred);
}


export default Object.freeze({title, theme, isStarred});