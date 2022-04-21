import save from "#models/util/save";
import EDIT from "./action.js";
import Config from "./config.js";
import {PopulateCheckitemByBody} from "#models/checkitem/api/middlewares";


EDIT.push(PopulateCheckitemByBody<Config, "checkitem", "idCheckitem">({
  checkitemKey: "checkitem",
  idCheckitemKey: "idCheckitem",
}));


EDIT.push(async ({get, body: {content, isComplete}}) => {
  const {checkitem} = get();

  if (content !== undefined) { checkitem.content = content; }
  if (isComplete !== undefined) { checkitem.isComplete = isComplete; }

  await save(checkitem);
});