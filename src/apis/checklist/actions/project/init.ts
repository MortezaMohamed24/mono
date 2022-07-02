import Config from "./config.js";
import PROJECT from "./action.js";
import {PopulateChecklistByQuery} from "src/models/checklist/api/middlewares";


PROJECT.push(PopulateChecklistByQuery<Config, "checklist", "idChecklist">({
  checklistKey: "checklist",
  idChecklistKey: "idChecklist",
}));


PROJECT.push(async ({set, get, query: {projector}}) => {
  const projection = await get().checklist.project(projector);

  set({projection});

  return projection;
});