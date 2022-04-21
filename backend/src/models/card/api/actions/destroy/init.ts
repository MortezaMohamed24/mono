import Config from "./config.js";
import DESTROY from "./action.js";
import {PopulateCardByBody} from "#models/card/api/middlewares";


DESTROY.push(PopulateCardByBody<Config, "card", "idCard">({
  cardKey: "card",
  idCardKey: "idCard",
}));


DESTROY.push(async ({get}) => {

  await get().card.destroy();

});