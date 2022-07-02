import Config from "./config.js";
import PROJECT from "./action.js";
import {PopulateCheckitemByQuery} from "src/models/checkitem/api/middlewares";


PROJECT.push(PopulateCheckitemByQuery<Config, "checkitem", "idCheckitem">({
  checkitemKey: "checkitem",
  idCheckitemKey: "idCheckitem",
}));


PROJECT.push(async ({get, query: {projector}}) => (

  await get().checkitem.project(projector)

));