import Config from "./config.js";
import PROJECT from "./action.js";
import {PopulateLabelByQuery} from "#models/label/api/middlewares";


PROJECT.push(PopulateLabelByQuery<Config, "label", "idLabel">({
  labelKey: "label",
  idLabelKey: "idLabel",
}));


PROJECT.push(async ({get, query: {projector}}) => {

  return await get().label.project(projector);

});