import Board from "src/models/board";
import CREATE from "./action.js";
import Config from "./config.js";
import {PopulateAuthorizedUser} from "src/models/user-api/middlewares";


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


  return [, ]
});


CREATE.push(async ({get}) => {
  
  return await get().board.project();

});


