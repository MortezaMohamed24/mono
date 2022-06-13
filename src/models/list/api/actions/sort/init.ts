import SORT from "./action.js";
import Config from "./config.js";
import {PopulateListByBody} from "src/models/list/api/middlewares";


SORT.push(PopulateListByBody<Config, "list", "idList">({
  listKey: "list",
  idListKey: "idList",
}));


SORT.push(async ({get, body: {method}}) => {

  await get().list.sort(method);

});