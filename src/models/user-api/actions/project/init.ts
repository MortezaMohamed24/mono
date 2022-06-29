import Config from "./config.js";
import PROJECT from "./action.js";
import {PopulateAuthorizedUser} from "src/models/user-api/middlewares";


PROJECT.push(PopulateAuthorizedUser<Config, "user">({
  userKey: "user"
}));


PROJECT.push(async ({get, query: {projector}}) => (
 
  await get().user.project(projector)

));