import Config from "./config.js";
import DESTROY from "./action.js";
import {PopulateCheckitemByBody} from "src/models/checkitem/api/middlewares";


DESTROY.push(PopulateCheckitemByBody<Config, "checkitem", "idCheckitem">({
  checkitemKey: "checkitem",
  idCheckitemKey: "idCheckitem",
}));


DESTROY.push(async ({get}) => {

  await get().checkitem.destroy();

});