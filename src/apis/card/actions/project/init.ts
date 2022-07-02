import save from "src/models/util/save";
import Config from "./config.js";
import PROJECT from "./action.js";
import {PopulateCardByQuery} from "src/models/card/api/middlewares";


PROJECT.push(PopulateCardByQuery<Config, "card", "idCard">({
  cardKey: "card",
  idCardKey: "idCard",
}));


PROJECT.push(async ({get, query: {projector}}) => {
  
  return await get().card.project(projector);

});


PROJECT.push(async ({get}) => {
  const {card} = get();

  card.updateDateLastView();

  await save(card);
});