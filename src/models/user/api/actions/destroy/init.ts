import Config from "./config.js";
import DESTROY from "./action.js";
import {PopulateAuthorizedUser} from "src/models/user/api/middlewares";


DESTROY.push(PopulateAuthorizedUser<Config, "user">({
  userKey: "user",
}));


DESTROY.push(async ({get}) => {

  await get().user.destroy();

});