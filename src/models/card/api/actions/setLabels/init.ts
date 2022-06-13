import Config from "./config.js";
import SET_LABELS from "./action.js";
import {PopulateCardByBody} from "src/models/card/api/middlewares";
import {PopulateLabelsByBody} from "src/models/label/api/middlewares";


SET_LABELS.push(PopulateCardByBody<Config, "card", "idCard">({
  cardKey: "card",
  idCardKey: "idCard",
}));


SET_LABELS.push(PopulateLabelsByBody<Config, "labels", "idLabels">({
  labelsKey: "labels",
  idLabelsKey: "idLabels",
}));


SET_LABELS.push(async ({get}) => {

  await get().card.setLabels(get().labels);

});