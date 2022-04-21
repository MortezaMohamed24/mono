import Config from "./config.js";
import DESTORY from "./action.js";
import {PopulateListByBody} from "#models/list/api/middlewares";


DESTORY.push(PopulateListByBody<Config, "list", "idList">({
  listKey: "list",
  idListKey: "idList",
}));


DESTORY.push(async ({get}) => {

  await get().list.destroy();

});