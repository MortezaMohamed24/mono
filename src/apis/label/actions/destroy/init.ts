import Config from "./config.js";
import DESTROY from "./action.js";
import {PopulateLabelByBody} from "src/models/label/api/middlewares";


DESTROY.push(PopulateLabelByBody<Config, "label", "idLabel">({
  labelKey: "label",
  idLabelKey: "idLabel",
}))


DESTROY.push(async ({get}) => {

  await get().label.destroy();

});