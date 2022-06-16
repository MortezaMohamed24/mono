import EDIT from "./action.js";
import save from "src/models/util/save";
import Config from "./config.js";
import {PopulateBoardByBody} from "src/models/board/api/middlewares";
import Board from "#models/board/model";


EDIT.push(PopulateBoardByBody<Config, "board", "idBoard">({
  boardKey: "board",
  idBoardKey: "idBoard",
}));


EDIT.push(async ({get, body: {title, theme, isStarred}}) => {
  const board = await Board.findOne({}, {strict: true})
  
  if (title !== undefined) { board.title = title; };
  if (theme !== undefined) { board.theme = theme; };
  if (isStarred !== undefined) { board.isStarred = isStarred; };
  
  await save(board);
});