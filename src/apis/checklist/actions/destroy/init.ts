import Config from "./config.js";
import DESTROY from "./action.js";
import {PopulateChecklistByBody} from "src/models/checklist/api/middlewares";


DESTROY.push(PopulateChecklistByBody<Config, "checklist", "idChecklist">({
  checklistKey: "checklist",
  idChecklistKey: "idChecklist",
}));


DESTROY.push(async ({get}) => {
  
  await get().checklist.destroy();
  
});