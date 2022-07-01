import Config from "./config.js";
import UNLABEL from "./action.js";
import {PopulateCardByBody} from "src/models/card/api/middlewares";
import {PopulateLabelByBody} from "src/models/label/api/middlewares";


UNLABEL.push(PopulateCardByBody<Config, "card", "idCard">({
  cardKey: "card",
  idCardKey: "idCard",
}));


UNLABEL.push(PopulateLabelByBody<Config, "label", "idLabel">({
  labelKey: "label",
  idLabelKey: "idLabel",
}));


UNLABEL.push(async ({get}) => {

  await get().card.unlabel(get().label);

});