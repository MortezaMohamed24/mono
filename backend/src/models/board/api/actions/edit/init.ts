import EDIT from "./action.js";
import save from "#models/util/save";
import Config from "./config.js";
import {PopulateBoardByBody} from "#models/board/api/middlewares";


EDIT.push(PopulateBoardByBody<Config, "board", "idBoard">({
  boardKey: "board",
  idBoardKey: "idBoard",
}));


EDIT.push(async ({get, body: {title, theme, isStarred}}) => {
  const {board} = get();
  
  if (title !== undefined) { board.title = title; };
  if (theme !== undefined) { board.theme = theme; };
  if (isStarred !== undefined) { board.isStarred = isStarred; };
  
  await save(board);
});