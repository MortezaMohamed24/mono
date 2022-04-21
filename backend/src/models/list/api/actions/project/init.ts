import Config from "./config.js";
import PROJECT from "./action.js";
import {PopulateListByQuery} from "#models/list/api/middlewares";


PROJECT.push(PopulateListByQuery<Config, "list", "idList">({
  listKey: "list",
  idListKey: "idList",
}));


PROJECT.push(async ({get, query: {projector}}) => {

  return await get().list.project(projector);

});