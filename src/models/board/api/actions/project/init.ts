import Config from "./config.js";
import PROJECT from "./action.js";
import save from "src/models/util/save";
import {PopulateBoardByQuery} from "src/models/board/api/middlewares";


PROJECT.push(PopulateBoardByQuery<Config, "board", "idBoard">({
  boardKey: "board",
  idBoardKey: "idBoard",
}));


PROJECT.push(async ({get, query}) => {
  
  return await get().board.project(query.projector);

});


PROJECT.push(async ({get}) => {
  const {board} = get();

  board.updateDateLastView();

  await save(board);
});