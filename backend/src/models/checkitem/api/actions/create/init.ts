import CREATE from "./action.js";
import Config from "./config.js";
import Checkitem from "#models/checkitem";
import {PopulateChecklistByBody} from "#models/checklist/api/middlewares";



CREATE.push(PopulateChecklistByBody<Config, "checklist", "idChecklist">({
  checklistKey: "checklist",
  idChecklistKey: "idChecklist",
}));


CREATE.push(async ({get, set, body: {id, content}}) => {
  const {checklist} = get();

  const checkitem = await Checkitem.make({
    id,
    content,
    checklist, 
  });

  set({checkitem});
});


CREATE.push(async ({get}) => {

  return get().checkitem;

});