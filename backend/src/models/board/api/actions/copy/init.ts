import COPY from "./action.js";
import Config from "./config.js";
import {PopulateBoardByBody} from "#models/board/api/middlewares";
import {PopulateAuthorizedUser} from "#models/user/api/middlewares";


COPY.push(PopulateBoardByBody<Config, "board", "idBoard">({
  boardKey: "board",
  idBoardKey: "idBoard",
}));


COPY.push(PopulateAuthorizedUser<Config, "user">({
  userKey: "user",
}));


COPY.push(async ({set, get, body: {title, keepCards}}) => {
  const {user, board} = get();


  const copy = await board.copy({
    user,
    title, 
    keepCards,
  });


  set({copy});
});


COPY.push(async ({get}) => {
  
  return await get().copy.project();

});