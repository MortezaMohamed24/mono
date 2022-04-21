import Config from "./config.js";
import {PopulateListByBody} from "#models/list/api/middlewares";
import DESTROY_ALL_OWN_CARDS from "./action.js";


DESTROY_ALL_OWN_CARDS.push(PopulateListByBody<Config, "list", "idList">({
  listKey: "list",
  idListKey: "idList",
}));


DESTROY_ALL_OWN_CARDS.push(async ({get}) => {
  
  await get().list.destroyAllOwnCards();

});