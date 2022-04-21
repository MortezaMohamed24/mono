import LABEL from "./action.js";
import Config from "./config.js";
import {PopulateCardByBody} from "#models/card/api/middlewares";
import {PopulateLabelByBody} from "#models/label/api/middlewares";


LABEL.push(PopulateCardByBody<Config, "card", "idCard">({
  cardKey: "card",
  idCardKey: "idCard",
}));


LABEL.push(PopulateLabelByBody<Config, "label", "idLabel">({
  labelKey: "label",
  idLabelKey: "idLabel",
}));


LABEL.push(async ({get}) => {

  await get().card.label(get().label);

});