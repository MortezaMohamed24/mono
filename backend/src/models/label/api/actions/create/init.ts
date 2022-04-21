import Label from "#models/label";
import Config from "./config";
import CREATE from "./action.js";
import {PopulateBoardByBody} from "#models/board/api/middlewares";


CREATE.push(PopulateBoardByBody<Config, "board", "idBoard">({
  boardKey: "board",
  idBoardKey: "idBoard",
}));


CREATE.push(async ({get, set, body: {id, name, color}}) => {
  const {board} = get();

  const label = await Label.make({
    id,
    name,
    color, 
    board, 
  });

  set({label});
});


CREATE.push(async ({get}) => {

  return await get().label.project();

});