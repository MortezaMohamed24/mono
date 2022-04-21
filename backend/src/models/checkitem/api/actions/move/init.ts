import MOVE from "./action.js";
import Config from "./config.js";
import {PopulateCheckitemByBody} from "#models/checkitem/api/middlewares";


MOVE.push(PopulateCheckitemByBody<Config, "checkitem", "idCheckitem">({
  checkitemKey: "checkitem",
  idCheckitemKey: "idCheckitem",
}));


MOVE.push(async ({set, get}) => {

  set({checklist: await get().checkitem.checklist()});

});


MOVE.push(async ({get, body: {index}}) => {

  await get().checkitem.move(get().checklist, index);

});