import Board from "#models/board";
import CREATE from "./action.js";
import Config from "./config.js";
import {PopulateAuthorizedUser} from "#models/user/api/middlewares";


CREATE.push(PopulateAuthorizedUser<Config, "user">({
  userKey: "user",
}));


CREATE.push(async ({set, get, body: {id, title, theme}}) => {
  const {user} = get();


  const board = await Board.make({
    id,
    user,
    title, 
    theme,
  });


  set({board});
});


CREATE.push(async ({get}) => {
  
  return await get().board.project();

});