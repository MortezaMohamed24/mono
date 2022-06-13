import Config from "./config.js";
import DESTROY from "./action.js";
import {PopulateBoardByBody} from "src/models/board/api/middlewares";


DESTROY.push(PopulateBoardByBody<Config, "board", "idBoard">({
  boardKey: "board",
  idBoardKey: "idBoard",
}));


DESTROY.push(async ({get}) => {

  await get().board.destroy();

});