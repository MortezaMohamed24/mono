import List from "src/models/list/model";
import Config from "./config.js";
import CREATE from "./action.js";
import {PopulateBoardByBody} from "src/models/board/api/middlewares";


CREATE.push(PopulateBoardByBody<Config, "board", "idBoard">({
  boardKey: "board",
  idBoardKey: "idBoard",
}));


CREATE.push(async ({get, set, body: {id, title}}) => {
  const {board} = get();

  const list = await List.make({
    id,
    board, 
    title,
  });

  set({list});
});


CREATE.push(async ({get}) => {

  return await get().list.project();

});