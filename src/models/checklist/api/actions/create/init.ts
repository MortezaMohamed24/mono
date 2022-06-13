import Config from "./config.js";
import CREATE from "./action.js";
import Checklist from "src/models/checklist";
import {PopulateCardByBody} from "src/models/card/api/middlewares";


CREATE.push(PopulateCardByBody<Config, "card", "idCard">({
  cardKey: "card",
  idCardKey: "idCard",
}));


CREATE.push(async ({get, set, body: {id, title}}) => {
  const {card} = get();

  const checklist = await Checklist.make({
    id,
    card, 
    title,
  });

  set({checklist});
});


CREATE.push(async ({get, set}) => {
  const projection = await get().checklist.project();
  
  set({return: projection});
  
  return projection;
});