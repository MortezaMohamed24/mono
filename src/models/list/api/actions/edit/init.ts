import save from "src/models/util/save";
import EDIT from "./action.js";
import Config from "./config.js";
import {PopulateListByBody} from "src/models/list/api/middlewares";


EDIT.push(PopulateListByBody<Config, "list", "idList">({
  listKey: "list",
  idListKey: "idList",
}));


EDIT.push(async ({get, body: {title, isWatched}}) => {
  const {list} = get();

  if (title !== undefined) { list.title = title; }
  if (isWatched !== undefined) { list.isWatched = isWatched; }

  await save(list);  
});