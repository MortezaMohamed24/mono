import EDIT from "./action.js";
import save from "src/models/util/save";
import Config from "./config.js";
import {PopulateLabelByBody} from "src/models/label/api/middlewares";


EDIT.push(PopulateLabelByBody<Config, "label", "idLabel">({
  labelKey: "label",
  idLabelKey: "idLabel",
}));


EDIT.push(async ({get, body: {name, color}}) => {
  const {label} = get();

  if (name !== undefined) { label.name = name; }
  if (color !== undefined) { label.color = color; }

  await save(label);
});