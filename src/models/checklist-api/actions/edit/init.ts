import EDIT from "./action.js";
import save from "src/models/util/save";
import Config from "./config.js";
import {PopulateChecklistByBody} from "src/models/checklist/api/middlewares";


EDIT.push(PopulateChecklistByBody<Config, "checklist", "idChecklist">({
  checklistKey: "checklist",
  idChecklistKey: "idChecklist",
}));


EDIT.push(async ({get, body: {title, filter}}) => {
  const {checklist} = get();
  
  if (title !== undefined) { checklist.title = title; }
  if (filter !== undefined) { checklist.filter = filter; }
  
  await save(checklist);
});